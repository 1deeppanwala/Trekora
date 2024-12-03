<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { onMount } from 'svelte';
	let modal: HTMLDialogElement;
	import { t } from 'svelte-i18n';
	import { appVersion, copyrightYear, versionChangelog } from '$lib/config';

	onMount(() => {
		modal = document.getElementById('my_modal_1') as HTMLDialogElement;
		if (modal) {
			modal.showModal();
		}
	});

	function close() {
		dispatch('close');
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			dispatch('close');
		}
	}
</script>

<dialog id="my_modal_1" class="modal">
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="modal-box" role="dialog" on:keydown={handleKeydown} tabindex="0">
		<h3 class="font-bold text-lg">
			{$t('about.about')} Trekora<span class=" inline-block"
				><img src="/favicon.png" alt="Map Logo" class="w-10 -mb-3 ml-2" /></span
			>
		</h3>
		<p class="py-1">
			Trekora <a
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary-500 underline"
				href={versionChangelog}>{appVersion}</a
			>
		</p>
		<button class="btn btn-primary" on:click={close}>{$t('about.close')}</button>
	</div>
</dialog>
