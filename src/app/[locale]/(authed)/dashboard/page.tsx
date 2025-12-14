import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";
import path from "path";

const DashboardPage = async () => {
  const filePath = path.join(process.cwd(), "src/content/DASHBOARD.md");
  const content = await fs.readFile(filePath, "utf-8");

  return (
    <div className="mx-auto h-full max-w-4xl overflow-auto bg-white p-8 py-12 dark:bg-stone-900">
      <article className="prose prose-stone dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:border-b prose-h2:border-stone-200 prose-h2:pb-2 prose-h2:dark:border-stone-700 prose-table:border-collapse prose-th:border prose-th:border-stone-300 prose-th:bg-stone-100 prose-th:p-2 prose-th:dark:border-stone-600 prose-th:dark:bg-stone-800 prose-td:border prose-td:border-stone-300 prose-td:p-2 prose-td:dark:border-stone-600 prose-pre:bg-stone-100 prose-pre:dark:bg-stone-800 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default DashboardPage;
