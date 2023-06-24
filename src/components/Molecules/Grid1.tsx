import img from '~/assets/images/feature.jpeg'
import { ActionSection } from '../sections/ActionSection'
import { actionSectionData } from '~/data/data'
import { DoubleText } from './DoubleText'
import { grid1Data } from '~/data/griddata'
import { Grid1ItemProps } from '~/shared/types'

const Grid1Item = ({ props, index }: { props: Grid1ItemProps, index: number }) => {

    const { image, title, subtitle, actions } = props;

    return (
        <>
            <div className='gap-7 relative flex flex-col justify-center '>
                <div className="w-full box-border relative 
                overflow-hidden bg-center rounded-2xl bg-cover bg-red-00 aspect-square bg-no-repeat"
                    style={{ backgroundImage: `url(${img.src})` }}
                    key={index}
                />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className='flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words
                overflow-visible font-sans dark:text-textHeadingDark font-bold relative
                text-textHeading text-2xl tracking-tight leading-6 text-left '>
                        Plugins
                    </div>
                    <div className='flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words
                overflow-visible font-sans dark:text-textHeadingDark font-medium text-xl
                leading-[1.4em] text-left tracking-[-0.5px] text-textSecondary '>
                        Use Effects like Transforms and Parallax scrolling
                    </div>
                </div>
            </div>
        </>
    )

}

export const Grid1 = () => {

    return (
        <section>
            <div className=" flex justify-center content-center items-center flex-col flex-nowrap 
             p-5 md:px-10 md:py-20 lg:p-[100px] ">
                <div className="grid w-full gap-[60px] max-w-[1000px] relative 
                 grid-cols-1 md:grid-cols-3 lg:grid-cols-3
                 overflow-visible  bg-red-00" >
                    {grid1Data.map((item, index) => <Grid1Item props={item} index={index} />)}
                </div>
            </div>
        </section>
    )
}