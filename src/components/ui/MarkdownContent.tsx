import { MarkdownHooks } from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { useTheme } from "@/components/theme-provider";

type Props = {
    children: string;
}

export default function MarkdownContent({ children }: Props) {

    // TODO: Handle system theme properly
    const { theme } = useTheme();
    const rehypePrettyCodeOptions = {
        theme: theme === 'dark' || theme === 'system' ? 'github-dark-default' : 'github-light-default',
        keepBackground: false,
        defaultLang: 'plaintext'
      };

    // TODO: Handle markdown loading state
    return (
        <article className="prose dark:prose-invert max-w-none">
            <MarkdownHooks remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypePrettyCode, rehypePrettyCodeOptions]]}>
                {children ?? ""}
            </MarkdownHooks>
        </article>
    );
}