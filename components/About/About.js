import styles from './styles.module.scss'
import Images from './Images'
import { useRouter } from 'next/router'
const About = ({images}) => {
    const router = useRouter
    return (
        <>

            <div className={`${styles.aboutWrapper}`}>

                <div className={`${styles.column}`}>
                    <h1 className={`${styles.aboutTitle}`}>A Bear and a Mermaid Walk Into a Bar…</h1>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>October</div> 30th, 2021, the story begins. Both Jake and Reagan were invited to the same
                            Halloween party, and though they had surprisingly similar circles, they’d never formally
                            met. Reagan spent the day turning herself into the perfect mermaid. Blue wig, glittery
                            makeup, and a fin to bring it all together. Prettiest mermaid of all time — in Jake’s
                            eyes, that is. Jake spent the day searching for a replacement for his go to Halloween
                            costume, a bear onesie, but decided to keep the onesie going for one last year. Listen,
                            it’s easy, cheap, and comfortable. It may not have been as good as Reagan’s mermaid
                            costume, but it was charming enough to make an impression.
                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>Their</div> first real interaction seemed like fate. Everyone was going out and Reagan & Jake ended
                            up sitting next to each other in the back of a car en route to South End, Charlotte. They hit
                            it off immediately, chatting about nothing and everything. It was an easy, flowing conversation;
                            within minutes they felt like they had known each other forever. When they got dropped off, they
                            were so consumed with chatting that they ended up separated from the rest of the group. They stuck
                            together, found their way to the right bar, and — even after they found the rest of their friends —
                            spent the rest of the night together talking about everything that popped into their heads. When
                            they were still talking & laughing hours later, Jake knew that he needed to take her to dinner. The
                            night ended, phone numbers were exchanged, and Jake’s mission to take this beautiful mermaid on a
                            date — and discover her true hair color — began.
                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>Now</div>, for those of you new to our love story, Jake was working for Reagan’s father, the formidable
                            Scott Toal, at the time. The night after the Halloween party, they began texting and Jake asked
                            Reagan out on a date. Reagan, being the wise individual she is, made Jake wait. She had to learn
                            more about him before she was willing to go on a date with one of her dad’s employees. But Jake was
                            not going to miss his chance, and the texting began. They talked everyday, texting full essays to
                            one another, learning and sharing as much as they possibly could through text. On November 7th,
                            Reagan relented, and finally, on November 11th, the first date took place. They kicked the evening
                            off with food, closed down a brewery, and ended the night at the Thirsty Beaver (Charlotte’s most
                            popular dive bar). Reagan’s cheeks hurt from smiling laughter and her throat hurt from some loud car
                            karaoke.

                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>After</div> that first date, Jake was blown away by the woman he had just gone on a date with. Beautiful,
                            fun, amazing sense of humor, wildly intelligent and witty, everything he had wanted in a partner to
                            walk through life with. From there he only had eyes for Reagan and saw just how blessed he was to
                            have met her. (Reagan chiming in: she couldn’t believe the gift she’d found in Jake either. She’d
                            never met anyone with the optimal mix of kindness, wit, mettle, and intuition - Jake had each in
                            spades and was cute to boot!)
                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            Families were met, more dates & trips were had, and before long, they were nearly inseparable.

                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>The</div> proposal was simultaneously the easiest and hardest thing of Jake’s life. He had gotten the idea
                            after having a dream about proposing to Reagan and was able to nearly recreate it. He did have to scale
                            back his vision a little bit — apparently fireworks become hazardous when shot off on a moving boat.
                            Knowing the plan and that he had found the person he wanted to spend the rest of his life with made things
                            easy. The hard part was realizing that it had to be a surprise and holding in his plans for weeks on end
                            seemed nearly impossible. With a little bit of luck, a smidge of Reagan being jet lagged, and a lot of
                            effort and help from the Toal family, the proposal was the happiest surprise of Reagan’s life. Backlit by
                            a lakeside sunset, Jake got down on one knee and Reagan, with joyful tears, said yes.
                        </span>
                    </div>
                    <div className={`${styles.paragraph}`}>
                        <span>
                            <div className={`${styles.indent}`}>Now</div> here we are. More excited than ever, not only from planning our wedding, but for planning the rest of our lives together.
                        </span>
                    </div>
                </div>
                <div className={`${styles.column}`}>
                <h1 className={`${styles.aboutTitle}`}>...and that was only the beginning</h1>
                    <div className={`${styles.imageSection}`}>
                        {router.isFallback ? (
                            <h1>Loading....</h1>
                        ) : (
                            <Images images={images}/>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default About