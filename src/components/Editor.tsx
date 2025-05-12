import { WebrtcProvider } from "y-webrtc";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";

// Use Yjs' publicly available WebSocket server
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
    <div className="border border-gray-300 p-4 rounded-lg max-w-3xl mx-auto mt-2 bg-white">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
