<script setup>
import SearchIcon from "../icons/search.svg";
import MailIcon from "../icons/mail.svg";
import DotsIcon from "../icons/dots.svg";
import InboxIcon from "../icons/inbox.svg";
</script>

<template>
  <nav class="flex items-center gap-x-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 flex items-center px-3"
          >
            <SearchIcon class="h-6 w-6 stroke-current text-darkgray" />
          </span>
          <input
            type="text"
            placeholder="Search.."
            class="rounded-md py-3 pr-4 pl-10 text-sm font-medium text-darkgray placeholder-darkgray focus:outline-none"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-grow items-center justify-between">
      <div class="mr-auto flex items-center gap-x-2.5">
        <button
          class="duration-400 flex h-11 w-11 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <MailIcon class="h-7 w-7 stroke-current" />
        </button>

        <button
          class="duration-400 flex h-11 w-11 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <InboxIcon class="h-7 w-7 stroke-current" />
        </button>
        <button
          class="duration-400 flex h-11 w-11 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <DotsIcon class="h-6 w-6 stroke-current" />
        </button>
      </div>
      <ul class="grid grid-cols-2 items-center gap-x-4">
        <li>
          <a
            class="font-medium text-darkgray transition duration-500 ease-in-out hover:text-gray-800"
            href="#"
            >Wallet</a
          >
        </li>
        <li>
          <a
            class="font-medium text-darkgray transition duration-500 ease-in-out hover:text-gray-800"
            href="#"
            >Invoice</a
          >
        </li>
      </ul>
      <button
        class="duration-400 ml-auto flex h-11 items-center justify-center rounded-full px-2 transition ease-linear hover:bg-blue-300 hover:text-white"
      >
        <span class="pl-2 text-sm">Hi, Shakir</span>
        <img
          src="/img/avatar-1.jpeg"
          alt="Profile image"
          class="ml-4 h-8 w-8 rounded-full object-cover"
        />
      </button>
    </div>
  </nav>
</template>
