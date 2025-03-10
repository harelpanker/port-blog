import Container from '@/app/ui/container';
import { Heading } from '@/app/ui/heading';
// import { ButtonLink } from '@/app/ui/link';
import Section from '@/app/ui/section';
import { Text } from '@/app/ui/text';

export default function SectionHero() {
	return (
		<Section>
			<Container>
				<div className='flex flex-col gap-y-6 py-14 text-center lg:py-36'>
					<Heading level={1}>Product management @ Port</Heading>
					<Text className='xl:!text-2xl'>
						Product management, building developer tools, and the challenges along the way.
					</Text>
					{/* <ButtonLink href='/'>Start reading</ButtonLink> */}
				</div>
			</Container>
		</Section>
	);
}
