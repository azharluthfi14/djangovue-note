<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center p-9">
      <div
        class="
          bg-white
          w-full
          md:w-1/2
          lg:w-2/6
          my-12
          py-6
          px-8
          rounded-lg
          shadow-md
        "
      >
        <div class="mb-5">
          <h1 class="text-3xl font-bold text-indigo-500">Sign in</h1>
        </div>
        <form>
          <div class="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              class="
                w-full
                border-gray-300
                focus:ring-indigo-500 focus:border-indigo-500
                rounded-md
                mt-2
                py-3
                pl-3
              "
              placeholder="Email address"
            />
          </div>
          <div class="mb-5">
            <input
              type="password"
              name="password"
              id="password"
              class="
                w-full
                rounded-md
                focus:ring-indigo-500 focus:border-indigo-500
                border-gray-300
                mt-2
                py-3
                pl-3
              "
              placeholder="Password"
            />
          </div>
          <button
            class="
              px-5
              py-3
              bg-indigo-500
              w-full
              border-md
              text-center
              block
              rounded-lg
              text-white
              font-semibold
            "
            type="button"
          >
            Sign in
          </button>
        </form>
        <div class="mt-5">
          <router-link
            :to="{ name: 'Signup' }"
            class="
              px-5
              py-3
              bg-indigo-100
              hover:bg-indigo-300
              w-full
              border-md
              text-center
              block
              rounded-lg
              text-indigo-500
              hover:text-white
              font-semibold
            "
          >
            Create Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
};
</script>