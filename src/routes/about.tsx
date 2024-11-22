export default function About() {
  return (
    <main class="flex flex-col items-center">
      <h1 class="mt-[10dvh] font-thin uppercase text-main flex flex-col items-end">
        <span class="text-xl text-subtle">What is</span>
        <span class="text-5xl">Life Calendar</span>
      </h1>
      <div class="mt-8 max-w-130 flex flex-col gap-2 text-subtle">
        <p>
          A calendar. From the year you were born until today.
          Each row is a year.
          But squares are weeks, not days.
        </p>

        <p>
          Layer by layer, bring colors to those weeks and watch the story of your life unfold.
          Celebrate your ups, reflect on downs, relive your precious moments.
          That's what made you who you are.
        </p>

        <p>
          Inspired by Tim Urban's post
          {' '}
          <a class="link" href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank" rel="noreferrer noopener">Your Life in Weeks</a>
          .
        </p>

        <p class="text-start mt-5">
          Value your time,
          <br />
          <a class="link" href="https://github.com/blinpete" target="_blank" rel="noreferrer noopener">@blinpete</a>
        </p>
      </div>
    </main>
  )
}
