<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let data: any;
	import type { SubmitFunction } from '@sveltejs/kit';

	import DotsHorizontal from '~icons/mdi/dots-horizontal';
	import WeatherSunny from '~icons/mdi/weather-sunny';
	import WeatherNight from '~icons/mdi/weather-night';
	import Forest from '~icons/mdi/forest';
	import Water from '~icons/mdi/water';
	import AboutModal from './AboutModal.svelte';
	import AccountMultiple from '~icons/mdi/account-multiple';
	import Avatar from './Avatar.svelte';
	import PaletteOutline from '~icons/mdi/palette-outline';
	import { page } from '$app/stores';
	import { t, locale, locales } from 'svelte-i18n';

	let query: string = '';

	let isAboutModalOpen: boolean = false;

	const submitLocaleChange = (event: Event) => {
		const select = event.target as HTMLSelectElement;
		const newLocale = select.value;
		document.cookie = `locale=${newLocale}; path=/`;
		locale.set(newLocale);
		window.location.reload();
	};
	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');
		console.log('theme', theme);
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const searchGo = async (e: Event) => {
		e.preventDefault();

		if ($page.url.pathname === '/search') {
			let url = new URL(window.location.href);
			url.searchParams.set('query', query);
			goto(url.toString(), { invalidateAll: true });
		}

		if (query) {
			goto(`/search?query=${query}`);
		}
	};
</script>

{#if isAboutModalOpen}
	<AboutModal on:close={() => (isAboutModalOpen = false)} />
{/if}

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box gap-2 w-96"
			>
				{#if data.user}
					<li>
						<button on:click={() => goto('/adventures')}>{$t('navbar.adventures')}</button>
					</li>
					<li>
						<button on:click={() => goto('/collections')}>{$t('navbar.collections')}</button>
					</li>
					<li>
						<button on:click={() => goto('/worldtravel')}>{$t('navbar.worldtravel')}</button>
					</li>
					<li>
						<button on:click={() => goto('/map')}>{$t('navbar.map')}</button>
					</li>
					<li>
						<button on:click={() => goto('/users')}>{$t('navbar.users')}</button>
					</li>
				{/if}

				{#if !data.user}
					<li>
						<button class="btn btn-primary" on:click={() => goto('/login')}
							>{$t('auth.login')}</button
						>
					</li>
					<li>
						<button class="btn btn-primary" on:click={() => goto('/signup')}
							>{$t('auth.signup')}</button
						>
					</li>
				{/if}

				<form class="flex gap-2">
					<label class="input input-bordered flex items-center gap-2">
						<input type="text" bind:value={query} class="grow" placeholder={$t('navbar.search')} />

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								fill-rule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clip-rule="evenodd"
							/>
						</svg>
					</label>
					<button on:click={searchGo} type="submit" class="btn btn-primary"
						>{$t('navbar.search')}</button
					>
				</form>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl" href="/"
			>Trekora <img src="/favicon.png" alt="Map Logo" class="w-10" /></a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-2">
			{#if data.user}
				<li>
					<button class="btn btn-neutral" on:click={() => goto('/adventures')}
						>{$t('navbar.adventures')}</button
					>
				</li>
				<li>
					<button class="btn btn-neutral" on:click={() => goto('/collections')}
						>{$t('navbar.collections')}</button
					>
				</li>
				<li>
					<button class="btn btn-neutral" on:click={() => goto('/worldtravel')}
						>{$t('navbar.worldtravel')}</button
					>
				</li>
				<li>
					<button class="btn btn-neutral" on:click={() => goto('/map')}>{$t('navbar.map')}</button>
				</li>
				<li>
					<button class="btn btn-neutral" on:click={() => goto('/users')}
						><AccountMultiple /></button
					>
				</li>
			{/if}

			{#if !data.user}
				<li>
					<button class="btn btn-primary" on:click={() => goto('/login')}>{$t('auth.login')}</button
					>
				</li>
				<li>
					<button class="btn btn-primary" on:click={() => goto('/signup')}
						>{$t('auth.signup')}</button
					>
				</li>
			{/if}

			<form class="flex gap-2">
				<label class="input input-bordered flex items-center gap-2">
					<input type="text" bind:value={query} class="grow" placeholder={$t('navbar.search')} />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							fill-rule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clip-rule="evenodd"
						/>
					</svg>
				</label>
				<button on:click={searchGo} type="submit" class="btn btn-neutral"
					>{$t('navbar.search')}</button
				>
			</form>
		</ul>
	</div>
	<div class="navbar-end">
		{#if data.user}
			<Avatar user={data.user} />
		{/if}
	</div>
</div>
