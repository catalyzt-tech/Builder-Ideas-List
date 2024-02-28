export type TabStateType = {
    index: number;
    view: "g" | "l";
    currentBadge: string;
    filter: boolean;
}

export type CheckBoxStateType = {
    "Type": string[]
    "Effort": string[]
    "Label": string[]
    "Category": string[]
}

export type MarkDownData = {
    id: string;
    title: string;
    description: string;
    lang: string;
    type: string;
    category: string;
    effort: string;
    labels: string;
    contentHtml: string;
};
  