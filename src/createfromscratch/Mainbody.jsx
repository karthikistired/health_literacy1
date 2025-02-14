import React from 'react'
import StorageIcon from "@material-ui/icons/Storage"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import "./Mainbody.css"

export default function Mainbody() {
    return (
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{ fontSize: "16px", fontWeight: "500" }}>
                    Recent Questionnaires
                </div>
                <div className="mainbody_top_right">
                    <div className="mainbody_top_center" style={{ fontSize: "14px", marginRight: "125px" }}>
                        Any Author
                        <ArrowDropDownIcon />

                        <button><StorageIcon style={{ fontSize: '16px', color: "black" }} /></button>
                        <button><FolderOpenIcon style={{ fontSize: '16px', color: "black" }} /></button>

                    </div>
                </div>
            </div>
            <div className="mainbody_docs">
                <div className='doc_card'>
                    {/*<img src={doc_image} className='doc_image' />*/}
                    <div className='doc_card_content'>
                        <h5>{/*{title}*/}</h5>
                        <div className='doc_content' style={{ fontSize: "12px", color: "grey" }}>
                            <div className='content_left'>
                                <StorageIcon style={{ color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px" }} />
                                Opened {/*{date}*/} 6 June 2024
                                <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}