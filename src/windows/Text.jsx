import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import useWindowStore from "#store/window.js";

const Text = () => {
    const data = useWindowStore((state) => state.windows.txtfile.data);

    if (!data) return null;

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target='txtfile'/>
                <h2>{name}</h2>
            </div>

            <div className='text-file-content p-4 overflow-y-auto h-full bg-white'>
                {subtitle && <h3 className="text-xl font-bold mb-4">{subtitle}</h3>}
                {image && <img src={image} alt={name} className="w-full max-w-md mb-4 rounded-lg shadow-md mx-auto"/>}
                <div className="description">
                    {description && description.map((para, index) => (
                        <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow
