import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout';

export const getStaticProps = async () => {

	const title = ''

	return {
		props: {
			title
		}
	}
}

type PropsType = {
	title: string
}

const Test = (props: PropsType) => {
	const { title } = props

	return (
		<PageWrapper>
			{title}
		</PageWrapper>
	)
}

Test.getLayout = getLayout
export default Test