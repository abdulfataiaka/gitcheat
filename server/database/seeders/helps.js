/* eslint-disable no-console */
import Help from '../models/help';

const { NODE_ENV } = process.env;

const testSeeds = [
  {
    _id: 1,
    categoryId: 1,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git'
  }
];

const mainSeeds = [
  {
    _id: 1,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on macOS with Homebrew',
    content: 'brew install git'
  },
  {
    _id: 2,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on Debian-based linux',
    content: 'sudo apt-get install git'
  },
  {
    _id: 3,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on Windows with Chocolatey',
    content: 'choco install git'
  },
  {
    _id: 4,
    categoryId: 2,
    type: 'cmd',
    title: 'Sets the name you want attached to your commit transaction',
    content: 'git config --global user.name [name]'
  },
  {
    _id: 5,
    categoryId: 2,
    type: 'cmd',
    title: 'Sets the email you want atached to your commit transactions',
    content: 'git config --global user.email [email address]'
  },
  {
    _id: 6,
    categoryId: 2,
    type: 'cmd',
    title: 'Enables helpful colorization of command line output',
    content: 'git config --global color.ui auto'
  },
  {
    _id: 7,
    categoryId: 3,
    type: 'cmd',
    title: 'Creates a new local repository with the specified name',
    content: 'git init [project-name]'
  },
  {
    _id: 8,
    categoryId: 3,
    type: 'cmd',
    title: 'Downloads a project and its entire version history',
    content: 'git clone [url]'
  },
  {
    _id: 9,
    categoryId: 4,
    type: 'cmd',
    title: 'Lists all new or modified files to be commited',
    content: 'git status'
  },
  {
    _id: 10,
    categoryId: 4,
    type: 'cmd',
    title: 'Shows file differences not yet staged',
    content: 'git diff'
  },
  {
    _id: 11,
    categoryId: 4,
    type: 'cmd',
    title: 'Add the specified file to the staging area',
    content: 'git add [file]'
  },
  {
    _id: 12,
    categoryId: 4,
    type: 'cmd',
    title: 'Shows file differences between staging and the last file version',
    content: 'git diff --staged'
  },
  {
    _id: 13,
    categoryId: 4,
    type: 'cmd',
    title: 'Unstages the file, but preserve its contents',
    content: 'git reset [file]'
  },
  {
    _id: 14,
    categoryId: 4,
    type: 'cmd',
    title: 'Records staged snapshots in version history',
    content: 'git commit -m [descriptive message]'
  },
  {
    _id: 15,
    categoryId: 5,
    type: 'cmd',
    title: 'Lists all local branches in the current repository',
    content: 'git branch'
  },
  {
    _id: 16,
    categoryId: 5,
    type: 'cmd',
    title: 'Creates a branch',
    content: 'git branch [branch-name]'
  },
  {
    _id: 17,
    categoryId: 5,
    type: 'cmd',
    title: 'Merges the specified branch’s history into the current branch',
    content: 'git merge [branch-name]'
  },
  {
    _id: 18,
    categoryId: 5,
    type: 'cmd',
    title: 'Switches to the specified branch',
    content: 'git checkout [branch-name]'
  },
  {
    _id: 19,
    categoryId: 5,
    type: 'cmd',
    title: 'Creates a branch and switch to it',
    content: 'git checkout -b [branch-name]'
  },
  {
    _id: 20,
    categoryId: 5,
    type: 'cmd',
    title: 'Rename branch',
    content: 'git checkout -m [new-branch-name]'
  },
  {
    _id: 21,
    categoryId: 5,
    type: 'cmd',
    title: 'Deletes the specified branch, locally',
    content: 'git branch -d [branch-name]'
  },
  {
    _id: 22,
    categoryId: 6,
    type: 'cmd',
    title: 'Deletes the file from the working directory and stages the deletion',
    content: 'git rm [file]'
  },
  {
    _id: 23,
    categoryId: 6,
    type: 'cmd',
    title: 'Removes the file from version control but preserves the file locally',
    content: 'git rm --cached [file]'
  },
  {
    _id: 24,
    categoryId: 6,
    type: 'cmd',
    title: 'Renames the file',
    content: 'git mv [from] [to]'
  },
  {
    _id: 25,
    categoryId: 7,
    type: 'cmd',
    title: 'Temporarily stores all modified tracked files',
    content: 'git stash'
  },
  {
    _id: 26,
    categoryId: 7,
    type: 'cmd',
    title: 'Restores the most last stashed files and deletes the stashed changeset',
    content: 'git stash pop'
  },
  {
    _id: 27,
    categoryId: 7,
    type: 'cmd',
    title: 'Lists all stashed changesets',
    content: 'git stash list'
  },
  {
    _id: 28,
    categoryId: 7,
    type: 'cmd',
    title: 'Deletes the last stashed changeset',
    content: 'git stash drop'
  },
  {
    _id: 29,
    categoryId: 8,
    type: 'cmd',
    title: 'Lists version history for the current branch',
    content: 'git log'
  },
  {
    _id: 30,
    categoryId: 8,
    type: 'cmd',
    title: 'Lists version history for a file, including renames',
    content: 'git log --follow [file]'
  },
  {
    _id: 31,
    categoryId: 8,
    type: 'cmd',
    title: 'Shows content differences between two branches',
    content: 'git diff [first-branch]...[second-branch]'
  },
  {
    _id: 32,
    categoryId: 8,
    type: 'cmd',
    title: 'Shows changes of the specified commit',
    content: 'git show [commit]'
  },
  {
    _id: 33,
    categoryId: 9,
    type: 'cmd',
    title: 'Undoes all commits afer [commit], preserving changes locally',
    content: 'git reset [commit]'
  },
  {
    _id: 34,
    categoryId: 9,
    type: 'cmd',
    title: 'Discards all history and changes back to the specified commit',
    content: 'git reset --hard [commit]'
  },
  {
    _id: 35,
    categoryId: 9,
    type: 'cmd',
    title: 'Discards all local changes in the working directory',
    content: 'git reset –hard HEAD'
  },
  {
    _id: 36,
    categoryId: 10,
    type: 'cmd',
    title: 'Pushes all local changesets to the remote repository',
    content: 'git push [alias] [branch]'
  },
  {
    _id: 37,
    categoryId: 10,
    type: 'cmd',
    title: 'Downloads new remote history and incorporate changes',
    content: 'git pull'
  },
  {
    _id: 38,
    categoryId: 10,
    type: 'cmd',
    title: 'Shows the name of remote repositories',
    content: 'git remote -v'
  },
  {
    _id: 39,
    categoryId: 10,
    type: 'cmd',
    title: 'Get the latest changes from the origin but not merge',
    content: 'git fetch'
  },
  {
    _id: 40,
    categoryId: 10,
    type: 'cmd',
    title: 'Removes the remote repository',
    content: 'git remote rm [remote repo name]'
  },
  {
    _id: 41,
    categoryId: 11,
    type: 'cmd',
    title: 'Change the commit message',
    content: 'git commit --amend'
  },
  {
    _id: 42,
    categoryId: 12,
    type: 'cmd',
    title: 'Lists tags',
    content: 'git tag'
  },
  {
    _id: 43,
    categoryId: 12,
    type: 'cmd',
    title: 'Lists tags with specified pattern',
    content: 'git tag -l "[pattern]"'
  },
  {
    _id: 44,
    categoryId: 12,
    type: 'cmd',
    title: 'Create annotated tag',
    content: 'git tag -a [version] -m [message]'
  },
  {
    _id: 45,
    categoryId: 12,
    type: 'cmd',
    title: 'Create a lightweight tag',
    content: 'git tag [version]'
  },
  {
    _id: 46,
    categoryId: 12,
    type: 'cmd',
    title: 'Tagging a commit',
    content: 'git tag -a [version] [commit]'
  },
  {
    _id: 47,
    categoryId: 12,
    type: 'cmd',
    title: 'Sharing a tag',
    content: 'git push [alias] [version]'
  },
  {
    _id: 48,
    categoryId: 12,
    type: 'cmd',
    title: 'Checkout tags',
    content: 'git checkout [version]'
  }
];

const helps = NODE_ENV === 'test' ? testSeeds : mainSeeds;

export default (done) => {
  Help.insertMany(helps, (error) => {
    if (error) {
      console.log('[!] Helps collection seed fail');
    } else {
      console.log('[*] Helps collection seeded successfully');
    }

    if (typeof done === 'function') done();
  });
};
