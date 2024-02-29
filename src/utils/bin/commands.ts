// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  // Define command descriptions
  const commandDescriptions = {
    help: 'Display available commands and descriptions',
    repo: 'Open the Github repository',
    about: 'Display information about the creator',
    resume: "Open the creator's resume",
    donate: 'Display donation options',
    email: 'Open default email client to send an email',
    github: "Open the creator's GitHub profile",
    linkedin: "Open the creator's LinkedIn profile",
    google: 'Search Google for the provided query',
    duckduckgo: 'Search DuckDuckGo for the provided query',
    bing: 'Search Bing for the provided query',
    reddit: 'Search Reddit for the provided query',
    echo: 'Echo back the provided input',
    whoami: 'Display the username of the current user',
    ls: 'List directory contents',
    cd: 'Change the directory',
    date: 'Display the current date and time',
    vi: 'Suggest using vim instead',
    vim: 'Suggest using nvim instead',
    nvim: 'Suggest using emacs instead',
    emacs: 'Suggest using vscode instead',
    sudo: 'Attempt to perform an action as a superuser',
    // Add more command descriptions here
  };

  // Generate the help text
  let helpText = 'Welcome! Here are all the available commands:\n\n';
  Object.entries(commandDescriptions).forEach(([command, description]) => {
    helpText += `${command}: ${description}\n`;
  });

  helpText +=
    "\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\nType 'sumfetch' to display summary.\n";

  return helpText;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest.
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Game

export const start = async (args?: string[]): Promise<string> => {
  // Introduction
  let response = 'Hello agent 069.\n\n';
  response +=
    "CIA needs your help again!\nType 'mission_1' to get more details.\n";
  return response;
};

export const mission_1 = async (args?: string[]): Promise<string> => {
  // Introduction
  return `Mission 1: Operation Red Button\n\nDetails:\nWe have intel that the KGB is launching a nuclear missile at the Pentagon. \nAll our agents in Moscow got eliminated, and we don't have time to send new poeple there.\nYou must hack their system to stop the launch.\nOnly you can save us now!!!\nYou must hack into their system and delate the file with nuclear code! \n\nType 'ls' to see the files on the russian server.\nHint: ls stands for 'list'. It is a command to list files in the current directory.`;
};

export const ls = async (args: string[]): Promise<string> => {
  if (currentDirectory === '/nuclear_code') {
    return `nuclear_code.txt\nepstein_didn't_kill_himself.xd\n\nTo delete the nuclear codes, use 'rm nuclear_code.txt'.\nhint: rm stands for 'remove'. It is a command to permanently remove files.`;
  } else {
    return `secrets.txt
KGB_agent_list.txt
putin_favorite_escorts.txt
USA_election_results_2025.txt
nuclear_code

Hint: 'cd' stands for 'change directory'. Use it to navigate to the 'nuclear_code' directory.
`;
  }
};

export const rm = async (args: string[]): Promise<string> => {
  if (currentDirectory === '/nuclear_code' && args[0] === 'nuclear_code.txt') {
    // Logic for successfully deleting the nuclear_code.txt file
    return `You have successfully deleted 'nuclear_code.txt'. The day is saved!

╔╦╗╦╔═╗╔═╗╦╔═╗╔╗╔  ╔═╗╔═╗╔═╗╔═╗╔═╗╔╦╗
║║║║╚═╗╚═╗║║ ║║║║  ╠═╝╠═╣╚═╗╚═╗║╣  ║║
╩ ╩╩╚═╝╚═╝╩╚═╝╝╚╝  ╩  ╩ ╩╚═╝╚═╝╚═╝═╩╝

    `;
  } else {
    return `Cannot delete '${args.join(' ')}': No such file or directory.`;
  }
};

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

let currentDirectory = '/'; // Root directory as the starting point

export const cd = async (args: string[]): Promise<string> => {
  if (args[0] === 'nuclear_code') {
    currentDirectory = '/nuclear_code';
    return `You are now in the 'nuclear_code' directory.`;
  } else {
    return `The directory '${args.join(' ')}' does not exist.`;
  }
};

// Banner
export const banner = (args?: string[]): string => {
  return `
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠤⠤⠠⡖⠲⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⡠⠶⣴⣶⣄⠀⠀⠀⢀⣴⣞⣼⣴⣖⣶⣾⡷⣶⣿⣿⣷⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⢸⠀⠀⠀⠙⢟⠛⠴⣶⣿⣿⠟⠙⣍⠑⢌⠙⢵⣝⢿⣽⡮⣎⢿⡦⡀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⢱⡶⣋⠿⣽⣸⡀⠘⣎⢢⡰⣷⢿⣣⠹⣿⢸⣿⢿⠿⡦⣄⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⢧⡿⣇⡅⣿⣇⠗⢤⣸⣿⢳⣹⡀⠳⣷⣻⣼⢿⣯⡷⣿⣁⠒⠠⢄⡀⠀⠀
                            ⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⣼⣿⣧⡏⣿⣿⢾⣯⡠⣾⣸⣿⡿⣦⣙⣿⢹⡇⣿⣷⣝⠿⣅⣂⡀⠀⠡⢂⠄⣈⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⣿⡟⣿⡇⡏⣿⣽⣿⣧⢻⡗⡇⣇⣤⣿⣿⣿⣧⣿⣿⡲⣭⣀⡭⠛⠁⠀⠀⣨⠁⠉⣂⢄⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⢻⣿⣇⣥⣏⣘⣿⣏⠛⠻⣷⠿⡻⡛⠷⡽⡿⣿⣿⣿⣷⠟⠓⠉⠢⢄⡀⢠⠇⠀⠀⠀⠁⠫⢢⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⢸⣾⣿⣽⣿⣏⣻⠻⠁⢠⠁⠀⠀⠀⠘⣰⣿⣿⢟⢹⢻⠀⠀⠀⠀⠀⠈⡒⢄⡀⠀⠀⠀⠀⠀⠀⠑⢄
                            ⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⢸⣯⣿⣿⣿⢷⡀⠀⠀⠀⠀⠀⠀⠀⠛⣩⣿⣿⢿⣾⣸⠀⠀⠀⠀⠀⠀⣅⡠⠚⠉⠉⠁⠀⠀⠀⢀⠌
                            ⠀⠀⠀⠀⠀⠀⠀⢡⠀⠀⠀⢟⣿⣯⡟⠿⡟⢇⡀⠀⠀⠐⠁⢀⢴⠋⡼⢣⣿⣻⡏⠀⠀⠀⣀⠄⠂⠁⠀⠀⠀⠀⠀⠀⢀⡤⠂⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠈⠊⢻⣿⣜⡹⡀⠈⠱⠂⠤⠔⠡⢶⣽⡷⢟⡿⠕⠒⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠁⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⢿⠿⠿⢿⠾⣽⡀⠀⠀⠀⠈⠻⣥⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠁⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡀⡀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣖⠂⠠⠐⠋⠀⠙⠳⣤⣠⠀⠀⠀⣀⠤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠵⡐⠄⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⡀⠀⠠⡀⠀⠈⠙⠶⣖⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡥⠈⠂⠀⠀⠀⠀⠀⠀⠀⣼⠉⠙⠲⣄⠈⠣⡀⠀⠀⠈⢻⡦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠈⣷⡄⠈⠄⠀⠀⠀⢧⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⡀⠀⢠⣿⣤⣤⣶⣶⣾⣿⣿⡄⢸⠀⠀⠀⢸⣄⣤⣼⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠇⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⠀⠀⠀⣼⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣀⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢀⣼⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠉⠁⠀⠈⠉⠙⠛⠿⠿⠽⠿⠟⠛⡉⠛⠲⣿⣿⠿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⢠⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⠀⠀⣠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢔⠏⠀⠀⠀⠀

888    888                   888           888b     d888               888    888                      888
888    888                   888           8888b   d8888               888    888                      888
888    888                   888           88888b.d88888               888    888                      888
8888888888  8888b.   .d8888b 888  888      888Y88888P888  .d88b.       8888888888  8888b.  888d888 .d88888
888    888     "88b d88P"    888 .88P      888 Y888P 888 d8P  Y8b      888    888     "88b 888P"  d88" 888
888    888 .d888888 888      888888K       888  Y8P  888 88888888      888    888 .d888888 888    888  888
888    888 888  888 Y88b.    888 "88b      888   "   888 Y8b.          888    888 888  888 888    Y88b 888
888    888 "Y888888  "Y8888P 888  888      888       888  "Y8888       888    888 "Y888888 888     "Y88888



type 'start' to play the game
`;
};

// 888    888                   888           888b     d888               888    888                      888
// 888    888                   888           8888b   d8888               888    888                      888
// 888    888                   888           88888b.d88888               888    888                      888
// 8888888888  8888b.   .d8888b 888  888      888Y88888P888  .d88b.       8888888888  8888b.  888d888 .d88888
// 888    888     "88b d88P"    888 .88P      888 Y888P 888 d8P  Y8b      888    888     "88b 888P"  d88" 888
// 888    888 .d888888 888      888888K       888  Y8P  888 88888888      888    888 .d888888 888    888  888
// 888    888 888  888 Y88b.    888 "88b      888   "   888 Y8b.          888    888 888  888 888    Y88b 888
// 888    888 "Y888888  "Y8888P 888  888      888       888  "Y8888       888    888 "Y888888 888     "Y88888

//                                                                                                                                      ⠀

// ██╗  ██╗ █████╗  ██████╗██╗  ██╗    ███╗   ███╗███████╗    ██╗  ██╗ █████╗ ██████╗ ██████╗
// ██║  ██║██╔══██╗██╔════╝██║ ██╔╝    ████╗ ████║██╔════╝    ██║  ██║██╔══██╗██╔══██╗██╔══██╗
// ███████║███████║██║     █████╔╝     ██╔████╔██║█████╗      ███████║███████║██████╔╝██║  ██║
// ██╔══██║██╔══██║██║     ██╔═██╗     ██║╚██╔╝██║██╔══╝      ██╔══██║██╔══██║██╔══██╗██║  ██║
// ██║  ██║██║  ██║╚██████╗██║  ██╗    ██║ ╚═╝ ██║███████╗    ██║  ██║██║  ██║██║  ██║██████╔╝
// ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝
