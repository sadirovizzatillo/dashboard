<script setup>
import HomeIcon from "../"
import BillIcon from "./icons/bill.svg";
import InvoiceIcon from "./icons/invoice.svg";
import BuildingIcon from "./icons/building.svg";
import CardIcon from "./icons/card.svg";
import SettingsIcon from "./icons/settings.svg";
import DashboardIcon from "./icons/dashboard.svg";

const menu = [
  { name: "Home", icon: HomeIcon },
  { name: "USA Payors", icon: BillIcon },
  { name: "Invoices", icon: InvoiceIcon },
  { name: "My Banks", icon: BuildingIcon },
  { name: "Withdraw", icon: CardIcon },
  { name: "Settings", icon: SettingsIcon },
];
</script>
<template>
  <aside class="flex w-72 flex-col px-4 pt-10 pb-6">
    <a
      href="#"
      class="flex items-center pl-8 text-2xl font-semibold text-purple-700 focus:outline-none"
    >
      <DashboardIcon class="mr-3 h-6 w-6 stroke-current" />
      <span>Super Finti</span>
    </a>
    <div>
      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
        <h2 class="font-medium capitalize text-gray-600">Main navigation</h2>
        <li v-for="item in menu" :key="item">
          <a
            href="#"
            class="flex items-center gap-x-4 text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-white focus:outline-none"
          >
            <Component :is="item.icon" class="h-6 w-6 stroke-current" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="sticky bottom-4 rounded-10 bg-gray-900 bg-[url(/img/line-pattern.svg)] bg-top p-6"
    >
      <div class="text-white">
        Refer a friend and get <span class="font-bold">$5</span>
      </div>
      <div class="mt-3 text-sm text-gray-400">The reward of transfer.</div>
      <button
        class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white"
      >
        Invite
      </button>
    </div>
  </aside>
</template>
