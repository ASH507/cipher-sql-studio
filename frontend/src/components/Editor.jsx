import Editor from "@monaco-editor/react";

export default function SQLeditor({ setQuery }) {
  return (
    <Editor
      height="200px"
      defaultLanguage="sql"
      onChange={(value) => setQuery(value)}
    />
  );
}