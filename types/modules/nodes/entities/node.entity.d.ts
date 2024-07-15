import { z } from "zod";
export declare const NodeInputSchema: z.ZodObject<{
    flowId: z.ZodString;
    parentNode: z.ZodOptional<z.ZodString>;
    referenceId: z.ZodOptional<z.ZodNumber>;
    position: z.ZodString;
    data: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["sequence", "message", "trigger"]>>;
    style: z.ZodOptional<z.ZodString>;
    className: z.ZodOptional<z.ZodString>;
    targetPosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    sourcePosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    hidden: z.ZodOptional<z.ZodBoolean>;
    selected: z.ZodOptional<z.ZodBoolean>;
    dragging: z.ZodOptional<z.ZodBoolean>;
    draggable: z.ZodOptional<z.ZodBoolean>;
    selectable: z.ZodOptional<z.ZodBoolean>;
    connectable: z.ZodOptional<z.ZodBoolean>;
    deletable: z.ZodOptional<z.ZodBoolean>;
    focusable: z.ZodOptional<z.ZodBoolean>;
    dragHandle: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    extent: z.ZodOptional<z.ZodString>;
    expandParent: z.ZodOptional<z.ZodBoolean>;
    positionAbsolute: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "message" | "sequence" | "trigger" | undefined;
    style?: string | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    parentNode?: string | undefined;
    referenceId?: number | undefined;
    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
    dragging?: boolean | undefined;
    draggable?: boolean | undefined;
    selectable?: boolean | undefined;
    connectable?: boolean | undefined;
    dragHandle?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    extent?: string | undefined;
    expandParent?: boolean | undefined;
    positionAbsolute?: string | undefined;
    data: string;
    flowId: string;
    position: string;
}, {
    type?: "message" | "sequence" | "trigger" | undefined;
    style?: string | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    parentNode?: string | undefined;
    referenceId?: number | undefined;
    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
    dragging?: boolean | undefined;
    draggable?: boolean | undefined;
    selectable?: boolean | undefined;
    connectable?: boolean | undefined;
    dragHandle?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    extent?: string | undefined;
    expandParent?: boolean | undefined;
    positionAbsolute?: string | undefined;
    data: string;
    flowId: string;
    position: string;
}>;
export declare const NodeOutputSchema: z.ZodObject<{
    id: z.ZodString;
    flowId: z.ZodString;
    parentNode: z.ZodOptional<z.ZodString>;
    referenceId: z.ZodOptional<z.ZodNumber>;
    position: z.ZodString;
    data: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["sequence", "message", "trigger"]>>;
    style: z.ZodOptional<z.ZodString>;
    className: z.ZodOptional<z.ZodString>;
    targetPosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    sourcePosition: z.ZodOptional<z.ZodEnum<["left", "right", "top", "bottom"]>>;
    hidden: z.ZodOptional<z.ZodBoolean>;
    selected: z.ZodOptional<z.ZodBoolean>;
    dragging: z.ZodOptional<z.ZodBoolean>;
    draggable: z.ZodOptional<z.ZodBoolean>;
    selectable: z.ZodOptional<z.ZodBoolean>;
    connectable: z.ZodOptional<z.ZodBoolean>;
    deletable: z.ZodOptional<z.ZodBoolean>;
    focusable: z.ZodOptional<z.ZodBoolean>;
    dragHandle: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    zIndex: z.ZodOptional<z.ZodNumber>;
    extent: z.ZodOptional<z.ZodString>;
    expandParent: z.ZodOptional<z.ZodBoolean>;
    positionAbsolute: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    type?: "message" | "sequence" | "trigger" | undefined;
    style?: string | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    updatedAt?: Date | undefined;
    parentNode?: string | undefined;
    referenceId?: number | undefined;
    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
    dragging?: boolean | undefined;
    draggable?: boolean | undefined;
    selectable?: boolean | undefined;
    connectable?: boolean | undefined;
    dragHandle?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    extent?: string | undefined;
    expandParent?: boolean | undefined;
    positionAbsolute?: string | undefined;
    data: string;
    id: string;
    flowId: string;
    createdAt: Date;
    position: string;
}, {
    type?: "message" | "sequence" | "trigger" | undefined;
    style?: string | undefined;
    hidden?: boolean | undefined;
    deletable?: boolean | undefined;
    focusable?: boolean | undefined;
    className?: string | undefined;
    selected?: boolean | undefined;
    zIndex?: number | undefined;
    ariaLabel?: string | undefined;
    updatedAt?: Date | undefined;
    parentNode?: string | undefined;
    referenceId?: number | undefined;
    targetPosition?: "left" | "right" | "top" | "bottom" | undefined;
    sourcePosition?: "left" | "right" | "top" | "bottom" | undefined;
    dragging?: boolean | undefined;
    draggable?: boolean | undefined;
    selectable?: boolean | undefined;
    connectable?: boolean | undefined;
    dragHandle?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    extent?: string | undefined;
    expandParent?: boolean | undefined;
    positionAbsolute?: string | undefined;
    data: string;
    id: string;
    flowId: string;
    createdAt: Date;
    position: string;
}>;
export type NodeInputEntity = z.infer<typeof NodeInputSchema>;
export type NodeOutputEntity = z.infer<typeof NodeOutputSchema>;