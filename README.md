# SvelteKit skeleton project with Supabase SSR and Tailwind CSS

## How to copy this repo

**1** - Create a new repository on GitHub.com eg. {YOUR-USERNAME}/new-repository  
**2** - Open terminal  
**3** - Create a bare clone of this repository
```bash
$ git clone --bare https://github.com/haflachrisso/svelte-kit-supabase-tailwind.git
```
**4** - Mirror-push to the new repository
```bash
$ cd svelte-kit-supabase-tailwind.git
$ git push --mirror https://github.com/{YOUR-USERNAME}/new-repository.git
```
**5** - Remove the temporary local repository you created earlier.
```bash
$ cd ..
$ rm -rf svelte-kit-supabase-tailwind.git
```
**6** - The repository is now copied and you are ready to start coding!
## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Tailwind
Installed using [this](https://tailwindcss.com/docs/guides/sveltekit) guide.

## Supabase with SSR
Installed useing [this](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit) guide.


