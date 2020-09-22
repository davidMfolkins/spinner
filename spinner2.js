const spinner = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\";
const speed = 150;

let newSpinner = spinner + "\n"

for (let i = 0; i < newSpinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${newSpinner[i]}`)
  }, i * speed);
};
