"use client";

import gsap from "gsap";
import { useEffect } from "react";
import SplitTextJS from "split-text-js";

const Text3dEffect = () => {
    useEffect(() => {
        const titles = gsap.utils.toArray("p");
        const tl = gsap.timeline({
            repeat: -1, // Infinite loop
        });

        titles.forEach((title) => {
            const splitTitle = new SplitTextJS(title);
            tl.from(
                splitTitle.chars,
                {
                    opacity: 0,
                    y: 40,
                    rotateX: -90,
                    stagger: 0.02,
                    duration: 1.2,
                },
                "<"
            ).to(
                splitTitle.chars,
                {
                    opacity: 0,
                    y: -40,
                    rotateX: 90,
                    stagger: 0.02,
                    duration: 1.2,
                },
                "<1"
            );
        });
    }, []);

    return (
        <div className="text-white">
            <div>
                <div className="text-5xl text-center m-0 leading-[0]">
                    <p>3D Text Animation</p>
                    <p>Right Winger</p>
                    <p>Central Midfielder</p>
                    <p>Attacking Midfielder</p>
                    <p>Defensive Midfielder</p>
                    <p>Attacking Goal Keeper</p>
                </div>
            </div>
        </div>
    );
};

export default Text3dEffect;
