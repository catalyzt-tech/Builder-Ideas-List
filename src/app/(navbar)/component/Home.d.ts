export type TabStateType = {
    index: number;
    view: "g" | "l";
    currentBadge: string;
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
  