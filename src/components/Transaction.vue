<script setup>
    import { reactive } from "vue";
    import DropIcon from "../icons/drop-svgrepo-com.svg";
    import LightBulbIcon from "../icons/lightbulb.svg";
    // import ListIcon from "../icons/list.svg";
    import DollarIcon from "../icons/dollars.svg";
import UpcomingTransactions from "./UpcomingTransactions.vue";
    const upcomingTransactionListToday = reactive([
      {
        id: 1,
        title: "Water Bill",
        status: "Unsuccessfully",
        transferAmount: "280",
        isIncome: false,
        color: "darkblue",
        icon: DropIcon,
      },
    ]);
    const upcomingTransactionListTomorrow = reactive([
      {
        id: 1,
        title: "Income: Salary Oct",
        status: "Successfully",
        transferAmount: "1200",
        isIncome: true,
        color: "pink",
        icon: DollarIcon,
      },
      {
        id: 2,
        title: "Electric Bill",
        status: "Successfully",
        transferAmount: "480",
        color: "blue",
        isIncome: false,
        icon: LightBulbIcon,
      },
      {
        id: 3,
        title: "Income: Jane Transfers",
        status: "Successfully",
        transferAmount: "500",
        color: "warning",
        isIncome: true,
        icon: LightBulbIcon,
      },
      {
        id: 4,
        title: "Income: Jane Transfers",
        status: "Successfully",
        transferAmount: "500",
        isIncome: true,
        color: "warning",
        icon: LightBulbIcon,
      },
    ]);
    </script>
    <template>
      <div class="ml-4 w-full rounded-[20px] bg-white p-6 lg:max-w-[360px]">
        <div class="mb-8 flex items-center justify-between">
          <h2 class="text-[17px] font-semibold capitalize text-gray-600">
            Upcoming Transactions
          </h2>
          <button
            class="cursor-pointer text-sm font-medium capitalize whitespace-nowrap text-darkgray hover:underline"
          >
            View all
          </button>
        </div>
        <p class="font-medium text-xs text-darkgray mb-3">Today</p>
        <ul class="mb-8" v-for="item in upcomingTransactionListToday" :key="item.id">
         <li class="mb-4 flex items-center">
        <Component  :is="DollarIcon" :class="setBackground" class="mr-4 h-[40px] w-[40px] rounded-10 stroke-white p-2" />
        <div class="flex w-full items-center justify-between">
          <div>
            <p class="text-sm font-medium">
              {{ item.title }}
            </p>
            <span class="text-[11px] font-medium text-gray-500">{{
              item.status
            }}</span>
          </div>
          <span
            class="block font-medium"
            :class="item.isIncome ? 'text-current' : 'text-red-700'"
            >${{ item.transferAmount }}</span
          >
        </div>
      </li>
        </ul>

        <p class="font-medium text-xs text-darkgray mb-3">Tomorrow</p>
        <ul>
          <UpcomingTransactions
            v-for="item in upcomingTransactionListTomorrow"
            :data="item"
            :key="item.id"
          />
        </ul>
      </div>
    </template>