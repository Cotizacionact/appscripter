import CommingSoonImg from '../../Images';
import { Button1 } from '../button-1/button-1';
/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CommingSoon = ({}) => {
    return (
        <div className="">
            <h2 className="w-full p-2 text-center text-4xl font-bold">
                Like What You See?
            </h2>

            <div className="flex">
                <div className="flex w-1/2 justify-center">
                    <Image src="/CommingSoon.png" width={200} height={200} alt="Image" />
                </div>

                <div className="w-1/2">
                    <h1 className="w-full text-center text-4xl">
                        Hire a Freelancer
                    </h1>
                    <p className="p-4 text-justify">
                        Development is a passion for some, don&apos;t let your
                        past experiance with programing stop you from achieving
                        success. Together we will build a website or aplication
                        your clients will love. Currently our website is under
                        development but feel free to hire my services on
                        Fiverr.com
                    </p>
                    <div className="w-full flex justify-end pr-4">
                    <Button1 className="w-1/3 text-white">Go To Fiverr Now!</Button1>
                    </div>
                </div>
            </div>
        </div>
    );
};
