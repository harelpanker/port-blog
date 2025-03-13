import Toggle from '@/app/components/layout/toggle';

export default function Footer() {
	return (
		<footer className='footer bg-base-300 text-base-content relative z-30 p-4'>
			<aside className='flex w-full flex-wrap items-center justify-between gap-x-2'>
				<p>Made with ❤️ by Port</p>

				<Toggle />
			</aside>
		</footer>
	);
}
