import Container from '@/app/ui/container';
import Section from '@/app/ui/section';

export default function SectionBody({
	body,
}: {
	body: {
		html: string;
	};
}) {
	return (
		<Section>
			<Container>
				<div className='prose xl:prose-xl mx-auto' dangerouslySetInnerHTML={{ __html: body.html }}></div>
			</Container>
		</Section>
	);
}
