import { Heading } from '~/components/atoms/Heading'
import { ChicaneTextProps } from '~/shared/types';
import { Subtitle } from '~/components/atoms/Subtitle';

function Hero(props: ChicaneTextProps) {
    
    const { title, subtitle, color, size } = props;

    return (
        <div>
            <Heading title={title} />
            <Subtitle title={subtitle} />
        </div>
    )
}

export { Hero }

