import chalk from 'chalk';

export const verbose = (message) => {
    console.log(chalk.magentaBright.dim(`[VERBOSE] ${message}`));
}

export const success  = (message) => {
    console.log(chalk.green(message));    
}

export const error  = (error) => {
    console.log(chalk.red(error));    
}

export default {
    verbose,
    success,
    error
}