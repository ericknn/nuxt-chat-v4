<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();
useHead({ title: chat.value.tittle });
</script>
<template>
  <ChatWindow :chat :messages @send-message="sendMessage" />
</template>
