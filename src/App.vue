<script setup>

import SearchIcon from "./icons/search.svg";
import MailIcon from "./icons/mail.svg";
import InboxIcon from "./icons/inbox.svg";
import ChevronDownIcon from "./icons/chevron-down.svg";
import CreditCardIcon from "./icons/credit-card.svg";
import EyeIcon from "./icons/eye.svg";
import RevenueIcon from "./icons/revenue.svg";
import ExpenseIcon from "./icons/expense.svg";
import SendIcon from "./icons/send.svg";
import ReceiveIcon from "./icons/receive.svg";
import CalendarIcon from "./icons/calendar.svg";
import PlusIcon from "./icons/plus.svg";
import InvestmentIcon from "./icons/investment.svg";
import FundIcon from "./icons/fund.svg";
import DotsCircleIcon from "./icons/dots-circle.svg";
import DotsIcon from "./icons/dots.svg";
import Sidebar from "./components/Sidebar.vue";


const recentTransactions = [
  {
    icon: SendIcon,
    type: "Send transaction",
    date: "Dec 24, 2021",
    amount: "$ 123.00",
    balance: "$ 334.00",
  },
  {
    icon: ReceiveIcon,
    type: "Receive fund",
    date: "Jul 20. 2021",
    amount: "$ 322.00",
    balance: "$ 658.00",
  },
];

const invoices = [
  {
    no: "#BCS101",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-2.jpeg",
    name: "Alexandar Parkinson",
    amount: "$ 13435.50",
    status: "Successful",
  },
  {
    no: "#BSD133",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-3.jpeg",
    name: "Natasha Analington",
    amount: "$ 1654.50",
    status: "Pending",
  },
];
</script>

<template>


  <div class="flex min-h-screen w-full bg-gray-200 font-sans">
    <Sidebar />   
    <main class="flex min-h-screen flex-1 flex-col bg-gray-100 p-8">
      <nav class="flex items-center gap-x-6">
        <div class="flex items-center justify-between mr-[150px]">
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
        <div class="flex items-center justify-between flex-grow">
          <div class="flex items-center gap-x-2.5 mr-auto">
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full hover:bg-blue-300 transition duration-400 ease-linear hover:text-white"
            >
              <MailIcon class="h-7 w-7 stroke-current" />
            </button>
            
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full hover:bg-blue-300 transition duration-400 ease-linear hover:text-white"
            >
              <InboxIcon class="h-7 w-7 stroke-current" />
            </button>
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full hover:bg-blue-300 transition duration-400 ease-linear hover:text-white"
            >
              <DotsIcon class="h-6 w-6 stroke-current" />
            </button>
          </div>
          <ul class="grid gap-x-4 grid-cols-2 items-center">
            <li>
              <a class="font-medium text-darkgray hover:text-gray-800 transition duration-500 ease-in-out" href="#">Wallet</a>
            </li>
            <li>
              <a class="font-medium text-darkgray hover:text-gray-800 transition duration-500 ease-in-out" href="#">Invoice</a>
            </li>
          </ul>
          <button
            class="flex h-11 items-center justify-center ml-auto rounded-full px-2 hover:bg-blue-300 transition duration-400 ease-linear hover:text-white"
          >
            
            <span class="pl-2 text-sm">Hi, Alexander</span>
            <img
              src="/img/avatar-1.jpeg"
              alt="Profile image"
              class="h-8 w-8 rounded-full object-cover ml-4"
            />
          </button>
        </div>
      </nav>


      <div class="flex gap-x-6 py-8">
        <div class="flex w-3/5 flex-col gap-y-8">
          <div
            class="flex items-center justify-between rounded-10 bg-gray-900 bg-[url('/img/line-pattern.svg')] p-7"
          >
            <div class="flex items-center gap-x-4">
              <div class="rounded-full bg-gray-700 p-3">
                <CreditCardIcon class="h-5 w-5 fill-current text-indigo-400" />
              </div>
              <div>
                <div class="text-sm text-gray-400">CARD NUMBER</div>
                <div class="pt-1 text-white">5540 2280 8647 5687</div>
              </div>
            </div>
            <div class="h-full w-px bg-gray-700" />
            <div>
              <div class="text-sm text-gray-400">EXPIRE DATE</div>
              <div class="pt-1 text-white">08/28</div>
            </div>
            <div class="h-full w-px bg-gray-700" />
            <div>
              <div class="text-sm text-gray-400">CVC</div>
              <div class="flex items-center gap-x-2">
                <div class="pt-1 text-white">****</div>
                <button>
                  <EyeIcon class="h-6 w-6 stroke-current text-white" />
                </button>
              </div>
            </div>
            <div class="h-full w-px bg-gray-700" />
            <div>
              <div class="text-sm text-gray-400">STATUS</div>
              <div class="pt-1 text-white">Active</div>
            </div>
          </div>
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">
                Statistics of costs
              </h2>
              <button
                class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
              >
                <span>Jan - Aug</span>
                <ChevronDownIcon class="h-6 w-6 stroke-current" />
              </button>
            </div>
            <div class="flex gap-x-8 pt-8">
              <StatisticChart class="w-full" />
              <div class="flex flex-col gap-4">
                <div
                  class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4"
                >
                  <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
                    <RevenueIcon class="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div class="text-sm text-indigo-700">Revenue</div>
                    <div class="font-normal">$10.576</div>
                  </div>
                </div>
                <div
                  class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4"
                >
                  <div class="rounded-full bg-gray-900 p-2 text-green-700">
                    <ExpenseIcon class="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div class="text-sm text-green-700">Expenses</div>
                    <div class="font-normal">$8.576</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">
                Recent transactions
              </h2>
              <button
                class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
              >
                View All
              </button>
            </div>
            <table>
              <tbody>
                <tr
                  class="border-b border-gray-700 last:border-none"
                  v-for="transaction in recentTransactions"
                  :key="transaction"
                >
                  <td class="py-4">
                    <div class="flex items-center gap-x-4">
                      <div
                        class="flex items-center justify-center rounded-full p-2"
                        :class="
                          transaction.type === 'Send transaction'
                            ? 'bg-indigo-700'
                            : 'bg-green-400'
                        "
                      >
                        <Component
                          :is="transaction.icon"
                          class="h-5 w-5 fill-current text-gray-900"
                        />
                      </div>
                      <span class="text-sm text-white">
                        {{ transaction.type }}
                      </span>
                    </div>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center gap-x-2">
                      <div
                        class="flex items-center justify-center rounded-full bg-gray-700 p-2"
                      >
                        <CalendarIcon
                          class="h-6 w-6 stroke-current text-gray-400"
                        />
                      </div>
                      <span class="text-sm text-gray-400">
                        {{ transaction.date }}
                      </span>
                    </div>
                  </td>
                  <td class="p-4">
                    <span class="text-sm text-white">
                      {{ transaction.amount }}
                    </span>
                  </td>
                  <td class="p-4">
                    <span class="text-sm text-white">
                      {{ transaction.balance }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">Invoices</h2>
              <button
                class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
              >
                <PlusIcon class="h-6 w-6 stroke-current" />
                <span>New Invoices</span>
              </button>
            </div>
            <table class="mt-4">
              <thead>
                <tr>
                  <td class="py-1 text-sm text-gray-400">No</td>
                  <td class="py-1 text-sm text-gray-400">Date</td>
                  <td class="py-1 text-sm text-gray-400">Client</td>
                  <td class="py-1 text-sm text-gray-400">Amount</td>
                  <td class="py-1 text-sm text-gray-400">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-gray-700 last:border-none"
                  v-for="invoice in invoices"
                  :key="invoice"
                >
                  <td class="py-4">
                    <span class="text-sm font-medium text-white">
                      {{ invoice.no }}
                    </span>
                  </td>
                  <td class="py-4">
                    <span class="text-sm text-gray-400">
                      {{ invoice.date }}
                    </span>
                  </td>
                  <td class="py-4">
                    <div class="flex items-center gap-x-2">
                      <img
                        :src="invoice.avatar"
                        alt=""
                        class="h-7 w-7 rounded-full object-cover"
                      />
                      <span class="text-sm text-white">
                        {{ invoice.name }}
                      </span>
                    </div>
                  </td>
                  <td class="py-4">
                    <span class="text-sm text-white">
                      {{ invoice.amount }}
                    </span>
                  </td>
                  <td class="py-4">
                    <div
                      class="flex items-center justify-center gap-x-2 rounded-10 border py-2 px-1"
                      :class="
                        invoice.status === 'Successful'
                          ? 'border-green-400/10 bg-green-700/20 text-green-400'
                          : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
                      "
                    >
                      <span
                        class="h-2 w-2 rounded-full"
                        :class="
                          invoice.status === 'Successful'
                            ? 'bg-green-400'
                            : 'bg-indigo-400'
                        "
                      />
                      <span class="text-xs">
                        {{ invoice.status }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex w-2/5 flex-col gap-y-8">
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">
                Scheduled transfer
              </h2>
              <button
                class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
              >
                <PlusIcon class="h-6 w-6 stroke-current" />
                <span>Add new</span>
              </button>
            </div>
            <div class="grid grid-cols-3 gap-x-4 pt-4">
              <div class="rounded-10 bg-gray-700 p-3">
                <img :src="`/img/Youtube-logo.png`" alt="" class="w-16" />
                <div class="pt-6 text-sm text-white">$39.9/m</div>
              </div>
              <div class="rounded-10 bg-gray-700 p-3">
                <img :src="`/img/Netflix-logo.png`" alt="" class="w-16" />
                <div class="pt-6 text-sm text-white">$45.2/m</div>
              </div>
              <div class="rounded-10 bg-gray-700 p-3">
                <img :src="`/img/Spotify-logo.png`" alt="" class="w-16" />
                <div class="pt-6 text-sm text-white">$59.5/m</div>
              </div>
            </div>
            <button
              class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-400 hover:text-white"
            >
              Get Started
            </button>
          </div>
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">My savings</h2>
              <button
                class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
              >
                <span>Weekly</span>
                <ChevronDownIcon class="h-6 w-6 stroke-current" />
              </button>
            </div>
            <div class="flex flex-col gap-y-4 pt-4">
              <div
                class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4"
              >
                <div
                  class="flex items-center justify-center rounded-full bg-indigo-800 p-2"
                >
                  <InvestmentIcon class="h-5 w-5 fill-current text-gray-900" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between leading-none">
                    <span class="text-white">Investment</span>
                    <span class="font-medium text-white">$2.350.02</span>
                  </div>
                  <span class="text-sm leading-3 text-gray-400">
                    2 months income 80%
                  </span>
                  <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
                    <div
                      class="h-2 rounded-full bg-indigo-400"
                      style="width: 80%"
                    />
                  </div>
                </div>
              </div>
              <div
                class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4"
              >
                <div
                  class="flex items-center justify-center rounded-full bg-green-400 p-2"
                >
                  <FundIcon class="h-5 w-5 fill-current text-gray-900" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between leading-none">
                    <span class="text-white">Mutual fund</span>
                    <span class="font-medium text-white">$1,450.02</span>
                  </div>
                  <span class="text-sm leading-3 text-gray-400">
                    3 months income 50%
                  </span>
                  <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
                    <div
                      class="h-2 rounded-full bg-green-400"
                      style="width: 50%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
            <div class="flex items-center justify-between">
              <h2 class="text-[20px] font-medium text-white">
                Revenue statistic
              </h2>
              <button class="p-2 text-gray-400 hover:text-white">
                <DotsCircleIcon class="h-6 w-6 fill-current" />
              </button>
            </div>
            <div class="flex items-center gap-x-4 pt-4">
              <div class="rounded-10 bg-gray-700 p-4">
                <DoughnutChart />
              </div>
              <div class="flex flex-1 flex-col gap-4">
                <div
                  class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4"
                >
                  <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
                    <InvestmentIcon class="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div class="text-sm text-indigo-700">Investment</div>
                    <div class="font-normal">$10.576</div>
                  </div>
                </div>
                <div
                  class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4"
                >
                  <div class="rounded-full bg-gray-900 p-2 text-green-700">
                    <FundIcon class="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div class="text-sm text-green-700">Mutual Fund</div>
                    <div class="font-normal">$8.576</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
