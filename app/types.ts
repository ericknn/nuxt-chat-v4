export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface Chat {
  id: string;
  tittle: string;
  messages: ChatMessage[];
}
