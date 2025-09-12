"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
    } & (
        | { color?: string; theme?: never }
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
    );
};

type ChartContextProps = {
    config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function ChartContainer({
    id,
    className,
    children,
    config,
    ...props
}: React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
        typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
}) {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
        <ChartContext.Provider value={{ config }}>
            <div
                data-slot="chart"
                data-chart={chartId}
                className={cn(
                    "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
                    className,
                )}
                {...props}
            >
                <ChartStyle id={chartId} config={config} />
                <RechartsPrimitive.ResponsiveContainer>
                    {children}
                </RechartsPrimitive.ResponsiveContainer>
            </div>
        </ChartContext.Provider>
    );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
    const colorConfig = Object.entries(config).filter(
        ([, config]) => config.theme || config.color,
    );

    if (!colorConfig.length) {
        return null;
    }

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(
                        ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                                .map(([key, itemConfig]) => {
                                    const color =
                                        itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
                                        itemConfig.color;
                                    return color ? `  --color-${key}: ${color};` : null;
                                })
                                .join("\n")}
}
`,
                    )
                    .join("\n"),
            }}
        />
    );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
    active,
    payload,
    label,
    className,
}: {
    active?: boolean;
    payload?: {
        name: string;
        value: number | string;
        color?: string;
        dataKey?: string;
        payload?: Record<string, any>;
    }[];
    label?: string;
    className?: string;
}) {
    if (!active || !payload?.length) return null;

    return (
        <div className={cn("rounded-lg border bg-background p-2 shadow-sm", className)}>
            <div className="grid gap-1">
                {label && <div className="text-sm font-medium">{label}</div>}
                {payload.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                    >
                        <div
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">{item.name}:</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const ChartLegend = RechartsPrimitive.Legend;

// Define the type for the payload items manually
type LegendPayloadItem = {
    value: string;
    color: string;
    type: string;
    dataKey?: string | number;
};

// Define the props for our custom legend component
type ChartLegendContentProps = React.ComponentProps<"div"> & {
    payload?: LegendPayloadItem[];
    verticalAlign?: "top" | "middle" | "bottom";
};

// This is the fully corrected component
function ChartLegendContent({
    className,
    payload,
    verticalAlign = "bottom",
}: ChartLegendContentProps) {
    if (!payload || !payload.length) {
        return null;
    }

    return (
        <div
            className={cn(
                "flex flex-wrap items-center gap-4 text-sm",
                verticalAlign === "top" ? "pb-3" : "pt-3",
                className,
            )}
        >
            {payload.map((item) => (
                <div key={item.value} className="flex items-center gap-2">
                    <div
                        className="h-2 w-2 rounded-full"
                        style={{
                            backgroundColor: item.color,
                        }}
                    />
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    );
}

export {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
};