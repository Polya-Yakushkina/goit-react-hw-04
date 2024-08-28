import ImageCard from "../ImageCard/ImageCard";

import clsx from "clsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery() {
    return (
        <ul>
            {items.map((item) => (
                <li>
                    <ImageCard />
                </li>
            ))}
        </ul>
    );
}