import React, { useState, useEffect }   from "react";
import { useParams }                    from "react-router-dom";
import axios                            from "axios";
import swal                             from 'sweetalert';
import IAssureTable                     from "../IAssureTable/IAssureTable.jsx";


export default () => {
    const { editId } = useParams(); // Get the  ID from the URL
    const [editingData, setEditingData] = useState(null);

    
    const [url,setUrl] = useState("");
    const [metaTagTitle,setmetaTagTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [keywords,setKeywords] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");

    const [tableDatas, setTableDatas] = useState([]);
    const [reportData, setReportData] = useState({});
    const [tableData, setTableData] = useState([]);
    const [startRange, setStartRange] = useState(0);
    const [limitRange, setLimitRange] = useState(10);
    const [apiLink, setApiLink] = useState("/api/seodetails");
    const [twoLevelHeader, setTwoLevelHeader] = useState(false);
    const [deleteMethod, setDeleteMethod] = useState("delete");
    const [dataCount, setDataCount] = useState(0); // Added for dataCount

    const tableHeading = {       
        url: "URL Name",
        metaTagTitle: "Meta Title",
        metaDescription: "Meta Description",
        canonicalUrl: "Canonical Url",
        keywords:"Keywords",
        actions: 'Actions',
    };
    
    const tableObjects = {
        editUrl: "/seo-panel",
        apiLink: "/api/seodetails",
        paginationApply: true,
        // searchApply: true,
        downloadApply: true,
        deleteMethod: "delete"
    };
    useEffect(() => {
        // Call getData on component mount to populate initial data
        getData();
    }, []);
    
    useEffect(() => {
        if (editId) {
        console.log(editId, "editId");
        // Fetch  data using the provided  ID
        axios
            .get(`/api/seodetails/get/one/${editId}`)
            .then((response) => {
                setEditingData(response.data); // Set the editing 
                setUrl(response.data.url);
                setmetaTagTitle(response.data.metaTagTitle);
                setMetaDescription(response.data.metaDescription);
                setKeywords(response.data.keywords);
                setCanonicalUrl(response.data.canonicalUrl);
            })
            .catch((error) => {
            console.error("Error fetching :", error.message);
            });
        }
    }, [editId]);

    const resetForm = () => {
        console.log("reset");
        setUrl("");
        setmetaTagTitle("");
        setMetaDescription("");
        setKeywords("");
        setCanonicalUrl("");
    };
    
    const handleDelete = (editId) => {
        // Perform the delete action using axios
        axios.delete(`/api/seodetails/delete/${editId}`)
        .then((response) => {
            console.log(" deleted:", response);
            // Refresh the  list after successful deletion
            getData(); // Corrected line
        })
        .catch((error) => {
            console.error("Error deleting :", error.message);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
        
            const formData = {
                url: url,
                metaDescription: metaDescription,
                metaTagTitle: metaTagTitle,
                canonicalUrl: canonicalUrl,
                keywords: keywords,
            }

            try {
                let response;
                if (editId) {
                    response = await axios.patch("/api/seodetails/patch/" + editId, formData);
                } else {
                    response = await axios.post("/api/seodetails/post", formData);
                }
            
                const updatedData = response.data; // Store the updated  data
                console.log("response:", updatedData);
                if(response.data.updated){
                    swal({
                        title : " ",
                        text  : "Record updated successfully",
                    });
                }else if(response.data.created){
                    swal({
                        title : " ",
                        text  : "Record submitted successfully",
                    });
                }
                
                // Perform any other necessary operations after updating the state
                resetForm();
                getData();
                window.location.href = "/seo-panel";
            } catch (error) {
                console.error("Error performing  operation:", error.message);
                swal({
                    title : " ",
                    text  : "Something went wrong!",
                });
            }
        }
    };

    const getData = () => {
        const formValue = {
        startRange: 0,
        limitRange: 100,
        };

        const listPromise = axios.post(apiLink + "/get/list", formValue);
        const countPromise = axios.get(apiLink + "/get/count", formValue);

        return Promise.all([listPromise, countPromise])
        .then(([listResponse, countResponse]) => {
            const tableData = listResponse.data.map((a, i) => ({
                _id: a._id,
                url: a.url,
                metaTagTitle:a.metaTagTitle,
                metaDescription:a.metaDescription,
                canonicalUrl:a.canonicalUrl,
                keywords:a.keywords,
            }));
            setTableData(tableData);
            setDataCount(countResponse.data.count);
        })
        .catch((error) => {
            console.error("Error getting data:", error.message);
        });
    };
    
    const validateForm = () => {
        var status = true;
        var regSpaceName = /[a-zA-Z_]+$/;
        // var tempEmail = this.state.email.trim(); // value of field with whitespace trimmed off
        // var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
        // var illegalChars = /[()<>,;:\\"[\]]/;
        // var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        if (url.length <= 0) {
            document.getElementById("nameError1").innerHTML =
            "This field is required";
            status = false;
        }
        if (metaTagTitle.length <= 0) {
            document.getElementById("nameError2").innerHTML =
            "This field is required";
            status = false;
        }
        if (metaDescription.length <= 0) {
            document.getElementById("nameError3").innerHTML =
            "This field is required";
            status = false;
        }

        if (keywords.length <= 0) {
            document.getElementById("nameError4").innerHTML =
            "This field is required";
            status = false;
        } 
        if (canonicalUrl.length <= 0) {
            document.getElementById("nameError5").innerHTML =
            "This field is required";
            status = false;
        }
    //    if (!this.state.mobile.match(phoneno)) {
    //         document.getElementById("mobileError1").innerHTML =
    //             "Please enter valid Mobile Number";
    //         status = false;
    //     }
    //     if (this.state.email.length <= 0) {
    //         document.getElementById("emailError1").innerHTML =
    //             "Please enter your Email";
    //         status = false;
    //     } else if (!emailFilter.test(tempEmail)) {
    //         //test email for illegal characters
    //         document.getElementById("emailError1").innerHTML =
    //             "Please enter a valid email address.";
    //         status = false;
    //     } else if (this.state.email.match(illegalChars)) {
    //         document.getElementById("emailError1").innerHTML =
    //             "Email contains invalid characters.";
    //         status = false;
    //     }

        return status;
    };
    // debugger
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
            <section className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding content">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pageContent table-responsive">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginBottom: "25px" }}>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 NOPadding topMargin box-header with-border">
                        <h4 className="col-lg-12 col-md-12 col-xs-12 col-sm-12 weighttitle NOPadding" >
                            SEO Panel
                        </h4>
                        </div>
                    </div>
                    <div>
                        <form 
                            className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                            required
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group col-lg-offset-2 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                                <label>URL </label>
                                <input
                                    type="text"
                                    placeholder="Eg: /contact, /search-results/ankita-gujarathi/all"
                                    className="form-control"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                                <div id="nameError1" className={"errorMsg "}></div>
                            </div>
                            <div className="form-group col-lg-offset-2 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                                <label>Meta Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={metaTagTitle}
                                    onChange={(e) => setmetaTagTitle(e.target.value)}
                                />
                                <div id="nameError2" className={"errorMsg "}></div>
                            </div>
                            <div className="form-group col-lg-offset-2 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                                <label>Meta Description</label>
                                <textarea name="metaDescription" 
                                    rows={3}  
                                    className="form-control"
                                    value={metaDescription}
                                    onChange={(e) => setMetaDescription(e.target.value)}
                                />

                                <div id="nameError3" className={"errorMsg "}></div>
                            </div>
                            <div className="form-group col-lg-offset-2 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                                <label>Canonical URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={canonicalUrl}
                                    onChange={(e) => setCanonicalUrl(e.target.value)}
                                />
                                <div id="nameError5" className={"errorMsg "}></div>
                            </div>
                            <div className="form-group col-lg-offset-2 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                                <label>Keywords</label>
                                <textarea name="metaDescription" 
                                    rows={3}  
                                    className="form-control"
                                    value={keywords}
                                    onChange={(e) => setKeywords(e.target.value)}
                                />
                                <div id="nameError4" className={"errorMsg "}></div>
                            </div>
                            <div className=" col-lg-offset-2 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    style={{ width: "180px", height: "30px" }}
                                >
                                {editingData ? "Update" : "Submit"}
                                </button>
                            </div>
                        </form>
                        <div>
                            <IAssureTable
                            tableHeading={tableHeading}
                            twoLevelHeader={twoLevelHeader}
                            dataCount={dataCount}
                            tableData={tableData}
                            getData={getData.bind(this)}
                            tableObjects={tableObjects}
                            // editId={editId}
                            deleteMethod={deleteMethod}
            
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};









