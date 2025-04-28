import Toggle from '@/app/components/layout/toggle';

export default function Footer() {
	return (
		<footer className='footer bg-base-300 text-base-content relative z-30 p-4'>
			<aside className='flex w-full flex-wrap items-center justify-between gap-x-2 text-center md:grid md:grid-cols-3'>
				<p className='md:col-start-2 md:w-full'>Made with ❤️ by Port</p>

				<div className='flex justify-end md:w-full'>
					<Toggle />
				</div>
			</aside>
		</footer>
	);
}
