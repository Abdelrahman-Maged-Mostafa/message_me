import consumer from "channels/consumer";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("✅ Connected to ChatroomChannel");
  },

  disconnected() {
    console.log("❌ Disconnected from ChatroomChannel");
  },

  received(data) {
    const container = document.getElementById("messagesBox");
    const input = document.getElementById("message_message_body");
    const HTML = `<div class="message"><strong>${data.foo.username}:</strong>${data.foo.body}</div>`;
    container.insertAdjacentHTML(`beforeend`, HTML);
    container.scrollTop = container.scrollHeight;
    input.value = "";
  },
});
