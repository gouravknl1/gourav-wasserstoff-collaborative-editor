import { WebrtcProvider } from "y-webrtc";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";

// Create a shared Yjs document for collaborative state
const ydoc = new Y.Doc();
const provider = new WebrtcProvider("my-room-id", ydoc, {
  signaling: ["wss://y-webrtc-eu.fly.dev"], // Public WebSocket server URL
});

const Editor = ({ user }: { user: { name: string; color: string } }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({ document: ydoc }), //Enables real-time collaboration
      CollaborationCursor.configure({
        provider,
        user, // Current user's name and color for cursor display
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "border border-black-300 min-h-[400px] p-5 bg-white rounded-md outline-none focus:ring-2 focus:ring-black-400 focus:border-black-400 prose prose-sm max-w-none overflow-y-auto",
      },
    },
  });

  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-3xl mx-auto mt-2 bg-white min-h-100">
      <EditorContent editor={editor} className="min-h-[400px] " />{" "}
    </div>
  );
};

export default Editor;
