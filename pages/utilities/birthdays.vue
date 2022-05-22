<template>
    <div class="container">
        <h1 class="title">Birthdays</h1>
        <p>Discord bots are changing. <br> This means that we can no longer provide you with the command to set your birthday. <br> Instead, this page now gives you your timezone for use with Discord bots.</p>
        <h2>Your timezone: {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</h2>
    </div>
</template>