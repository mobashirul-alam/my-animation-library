import Text3dEffect from "./components/text-3d-effect";

const TextAnimationPage = () => {
    return (
        <div className="h-screen w-full bg-slate-950">
            <div className="bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
                <div className="flex justify-center items-top h-screen py-28">
                    <div>
                        <h1 className="text-3xl font-bold mb-20 text-center text-white">
                            Text Animation
                        </h1>

                        <Text3dEffect />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextAnimationPage;
