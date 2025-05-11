import { WebrtcProvider } from "y-webrtc";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";

// Use Yjs' publicly available WebSocket server (if you don't want to run your own)
const ydoc = new Y.Doc();
const provider = new WebrtcProvider("my-room-id", ydoc, {
  signaling: ["wss://y-webrtc-eu.fly.dev"], // Public WebSocket server URL
});

const Editor = ({ user }: { user: { name: string; color: string } }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({ document: ydoc }),
      CollaborationCursor.configure({
        provider,
        user,
      }),
    ],
  });

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "10px auto",
        backgroundColor: "#fff",
      }}
    >
      <EditorContent editor={editor} />
    </div>
  );
};
export default Editor;
