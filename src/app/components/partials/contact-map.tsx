'use client'
import { Resume } from '../interfaces/resume';

const ContactMap = (resume:Resume) => {
    const mapSource = `https://maps.google.com/maps?q=${resume.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="w-full">
            <div className="gmap_canvas"><iframe width="100%" height="270" id="gmap_canvas" src={mapSource} frameBorder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
};

export default ContactMap;