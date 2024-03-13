import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import axios from 'axios';
import swal from 'sweetalert';
import withRouter from '../../common/withRouter.js';
import S3FileUpload from 'react-s3';
import IAssureTable from '../../IAssureTable/IAssureTable.jsx';
import BulkUpload from "../BulkUpload/BulkUpload.js";
import 'bootstrap/js/tab.js';
import './OneField.css'

class OneFieldForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "user_ID": "",
            "startRange": 0,
            "limitRange": 10000,
            "editId": '',
            "fieldValue": "",
            "categoryImage": "",
            "pageUrl": "",
            "apiLink": "",
        };
    }
    componentWillUnmount(){

    }
    componentDidMount() {
        const user_ID = localStorage.getItem("user_ID")
        const companyID = localStorage.getItem("companyID")

        this.setState({
            apiLink: this.props.tableObjects.apiLink,
            user_ID: user_ID,
            companyID: companyID,
            editId: this.props.editId
        }, () => {
            console.log("this.state.user_ID = ", this.state.user_ID);
            console.log("this.state.editId = ", this.state.editId);
        })

        //========  Validation  ===========
        $.validator.addMethod("regxonefield", function (value, element, regexpr) {
            return regexpr.test(value.trim());
        }, "Please enter valid field value");
        jQuery.validator.setDefaults({
            debug: true,
            success: "valid"
        });

        $("#" + this.props.fields.attributeName).validate({
            rules: {
                fieldName: {
                    required: true,
                    regxonefield: /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,
                },
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") === "fieldName") {
                    error.insertAfter("#fieldName");
                }
            }
        });

    }


    componentDidUpdate(prevProps) {
        if (this.props.editId !== this.state.editId) {
            this.setState({ editId: this.props.editId },
                () => {
                    console.log("onefieldform 31 componentDidUpdate editId = ",this.state.editId);                            
                });
            this.edit(this.props.editId);
        }
    }

    validation(){
         //========  Validation  ===========
        $.validator.addMethod("regxonefield", function (value, element, regexpr) {
            return regexpr.test(value.trim());
        }, "Please enter valid field value");
        jQuery.validator.setDefaults({
            debug: true,
            success: "valid"
        });

        $("#" + this.props.fields.attributeName).validate({
            rules: {
                fieldName: {
                    required: true,
                    regxonefield: /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,
                },
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") === "fieldName") {
                    error.insertAfter("#fieldName");
                }
            }
        });
    }

    compontWillReceiveProps(nextProps){
       this.Validation();
    }


    backtoum() {
        this.props.history.push("/umlistofusers")
    }
    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        var fieldName = this.props.fields.attributeName
        this.setState({
            fieldName: event.target.value
        }, () => {
        });
    }
    submitType(event) {
        event.preventDefault();
        if (this.props.editId) {
            var formValues = {
                "companyID": this.state.companyID,
                "fieldID": this.props.editId,
                "fieldValue": this.state.fieldName ? this.state.fieldName.trim() : this.state.fieldName,
                "iconUrl": this.state.categoryImage,
                "updatedBy": this.state.user_ID
            }
            console.log("formValues with image = ",formValues);
            if ($('#' + this.props.fields.attributeName).valid()) {

                axios.patch(this.state.apiLink + '/patch', formValues)
                    .then((response) => {
                        if(response.data.updated){
                            this.setState({
                                fieldName: "",
                                categoryImage: "",
                                iconUrl: ""
                            }, () => {
                                if (this.props.tableObjects.editUrl1) {
                                    this.props.history.push(this.props.tableObjects.editUrl1);
                                } else {
                                    this.props.history.push(this.props.tableObjects.editUrl);
                                }
                            })
                        }
                        if (this.props.getSecondFieldData) {
                            this.props.getSecondFieldData(this.state.startRange, this.state.limitRange);
                        }
                        this.getData(this.state.startRange, this.state.limitRange);
                        swal(" ", this.props.fields.title + " updated Successfully");
                    })
                    .catch((error) => {
                    })
            }
        } else {
            var formValues = {
                "companyID": this.state.companyID,
                "fieldValue": this.state.fieldName ? this.state.fieldName.trim() : this.state.fieldName,
                "iconUrl": this.state.categoryImage,
                "createdBy": this.state.user_ID
            }
            console.log("formValues one = ",  formValues);
            console.log("attributeName = ",  ("#"+this.props.fields.attributeName));
            console.log("attributeName = ",  ($("#"+this.props.fields.attributeName).valid()));
            if ($('#' + this.props.fields.attributeName).valid()) {
                axios.post(this.state.apiLink + 'post', formValues)
                    .then((response) => {                        
                        if (response.data.created) {
                            swal(" ", this.state.fieldName + " " + this.props.fields.title + " submitted Successfully");
                        } else {
                            swal(" ", this.state.fieldName + " " + this.props.fields.title + " already exists");
                        }
                        this.getData(this.state.startRange, this.state.limitRange);
                        if (this.props.getSecondFieldData) {
                            this.props.getSecondFieldData(this.state.startRange, this.state.limitRange);
                        }
                        this.setState({
                            fieldName: "",
                            categoryImage: "",
                            iconUrl: ""
                        })
                    })
                    .catch((error) => {
                        swal(" ", this.state.fieldName + " Failed to Submit...");
                    })
            }else{
                $(event.target).parent().find('.errorinputText .error:first').focus();
            }

        }
    }
    updateType(event) {
        event.preventDefault();

        var formValues = {
            "companyID": this.state.companyID,
            "fieldID": this.props.editId,
            "fieldValue": this.state.fieldName.trim(),
            "iconUrl": this.state.categoryImage,
            "updatedBy": this.state.user_ID
        }
        console.log("Update Onefield formValues = ", formValues);
        if ($('#' + this.props.fields.attributeName).valid()) {
            axios.patch(this.state.apiLink + '/patch', formValues)
                .then((response) => {                    
                    if(response.data.updated){
                        this.setState({
                            fieldName       : "",
                            categoryImage   : "",
                            iconUrl         : "",
                        }, () => {
                            this.getData(this.state.startRange, this.state.limitRange);
                            if (this.props.tableObjects.editUrl1) {
                                this.props.history.push(this.props.tableObjects.editUrl1);
                            } else {
                                this.props.history.push(this.props.tableObjects.editUrl);
                            }
                            // this.props.history.push(this.props.tableObjects.editUrl);
                            swal(" ", this.props.fields.title + " updated Successfully");
                        })
                    }
                })
                .catch((error) => {
                    swal(" ", this.props.fields.title + " Failed to Update");
                })
        }
    }
    getDataCount() {
        axios.get(this.state.apiLink + 'get/count')
            .then((response) => {

                this.setState({
                    dataCount: response.data.dataCount
                })

            })
            .catch((error) => {

            });
    }
    getData(startRange, limitRange) {
        var data = {
            startRange: startRange,
            limitRange: limitRange
        }
        axios.post(this.state.apiLink + 'get/list', data)
            .then((response) => {
                var tableData = response.data.map((a, i) => {
                    return ({
                        _id: a._id,
                        companyID: a.companyID ? a.companyID : this.state.companyID,
                        [this.props.fields.attributeName]: a[this.props.fields.attributeName],
                        iconUrl: "<img class='uploadedImage' src=" + a.iconUrl + ">"
                    })
                })
                var filterByCompanyID = tableData.filter(field => field.companyID === this.state.companyID);

                this.setState({
                    ["tableData" + this.props.fields.attributeName]: filterByCompanyID
                }, () => {
                    // console.log("line 219 this.state = ", this.state);
                })

            })
            .catch((error) => { });
    }
    edit(editId) {
        $('label.error').html('')
        var fieldName = this.props.fields.attributeName;
        if (editId) {

            axios.get(this.state.apiLink + 'get/one/' + editId)
                .then((response) => {
                    // console.log('line 247 response',response.data);
                    if (response.data) {
                        this.setState({
                            "fieldName": response.data[fieldName],
                            "categoryImage": response.data.iconUrl,
                        }, () => {
                        });
                    }
                })
                .catch((error) => {
                    console.log("onefieldform edit function Error = ", error);
                });

        }
    }
    docBrowse(event) {
        event.preventDefault();
        var name = event.target.name
        var docBrowse = [];
        if (event.currentTarget.files && event.currentTarget.files[0]) {
            for (var i = 0; i < event.currentTarget.files.length; i++) {
                var file = event.currentTarget.files[i];
                if (file) {
                    var fileName = file.name;
                    // console.log('fileName',fileName);
                    var ext = fileName.split('.').pop();
                    if (ext === "jpg" || ext === "png" || ext === "jpeg" || ext === "JPG" || ext === "PNG" || ext === "JPEG") {
                        if (file) {
                            var objTitle = { fileInfo: file }
                            docBrowse.push(objTitle);

                        } else {
                            swal(" ", "Files not uploaded");
                        }//file
                    } else {
                        swal(" ", "Allowed images formats are (jpg,png,jpeg)");
                    }//file types
                }//file
            }//for 

            if (event.currentTarget.files) {
                this.setState({
                    ["gotImage" + name]: true

                })
                main().then(formValues => {
                    this.setState({
                        [name]: formValues[0].docBrowse,
                    }, () => {
                        // console.log("categoryImage0",this.state.categoryImage)
                        this.setState({
                            ["gotImage" + name]: false
                        })
                    })
                });

                async function main() {
                    var formValues = [];
                    for (var j = 0; j < docBrowse.length; j++) {
                        var config = await getConfig();
                        var s3url = await s3upload(docBrowse[j].fileInfo, config, this);
                        const formValue = {
                            "docBrowse": s3url,
                            "status": "New"
                        };
                        formValues.push(formValue);
                    }
                    return Promise.resolve(formValues);
                }


                function s3upload(image, configuration) {

                    return new Promise(function (resolve, reject) {
                        S3FileUpload
                            .uploadFile(image, configuration)
                            .then((Data) => {
                                resolve(Data.location);
                            })
                            .catch((error) => {
                            })
                    })
                }
                function getConfig() {
                    return new Promise(function (resolve, reject) {
                        axios
                            .get('/api/projectsettings/get/S3')
                            .then((response) => {
                                const config = {
                                    bucketName: response.data.bucket,
                                    dirName: 'propertiesImages',
                                    region: response.data.region,
                                    accessKeyId: response.data.key,
                                    secretAccessKey: response.data.secret,
                                }
                                resolve(config);
                            })
                            .catch(function (error) {
                            })
                    })
                }
            }
        }
    }
    deleteDoc(event) {
        event.preventDefault();
        var name = event.target.getAttribute("name");
        this.setState({
            [name]: "",
            ["gotImage" + name]: false

        }, () => {
            // console.log('name',this.state.categoryImage);
        })
    }

    render() {
        // console.log("this.props.editId = ",this.props.editId);
        // console.log("typeof this.props.editId = ",typeof this.props.editId);

        return (
            <div className="">
                <div className="">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
                        <section className="content">
                            <div className={this.props.masterFieldForm ? "OneFieldModal" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 pageContent"}>
                                <div className="row">
                                    <div className="box-header with-border col-lg-12 col-md-12 col-xs-12 col-sm-12 NOpadding-right">
                                        <h4 className="weighttitle col-lg-9 col-md-9 col-xs-12 col-sm-12 NOpadding-right">{this.props.fields.title === "Location Type" ? this.props.fields.title + "s" : this.props.fields.title} </h4>
                                        {
                                            this.props.bulkRequired ?
                                                <ul className="nav tabNav nav-pills col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                    <li className="active col-lg-5 col-md-5 col-xs-5 col-sm-5 NOpadding text-center"><a className="fieldTab" data-toggle="pill" href={"#manual-"+this.props.fields.attributeName}>Manual</a></li>
                                                    <li className="col-lg-6 col-md-6 col-xs-6 col-sm-6 NOpadding  text-center"><a className="fieldTab" data-toggle="pill" href={"#bulk-"+this.props.fields.attributeName}>Bulk Upload</a></li>
                                                </ul>
                                                : null
                                        }
                                    

                                    </div>
                                    <section className="Content">
                                        <div className="row tab-content">
                                            <div id={"manual-"+this.props.fields.attributeName} className={this.props.masterFieldForm ? "tab-pane fade in active mt" : "col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12"}>
                                                {
                                                    this.props.fields.hasImage === true
                                                        ?
                                                        <form className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id={this.props.fields.attributeName} >
                                                            <div className="form-margin col-lg-6 col-lg-offset-1 col-md-6 col-sm-12 col-xs-12 pdcls">
                                                                <div id="OneFieldInput">
                                                                    <label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding-left">{this.props.fields.title} <i className="astrick">*</i></label>
                                                                    <input type="text" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12 errorinputText" value={this.state.fieldName} ref="fieldName" id="fieldName"  name="fieldName" onChange={this.handleChange.bind(this)} placeholder={this.props.fields.placeholder} required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 OFFImageDiv " id="LogoImageUpOne" >
                                                                    <div><i className="fa fa-camera"></i> <br /><p>UPLOAD IMAGE</p></div>
                                                                    <input onChange={this.docBrowse.bind(this)} id="LogoImageUp" type="file" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" title="" name="categoryImage" />
                                                                </div>
                                                                {
                                                                    this.state.categoryImage ?
                                                                        <div className="col-lg-12 col-md-2 col-sm-12 col-xs-12 nopadding CustomImageUploadOF">
                                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                                                                <label className="labelform deletelogo col-lg-12 col-md-12 col-sm-12 col-xs-12" id={this.state.categoryImage} name="categoryImage" title="Delete Image" onClick={this.deleteDoc.bind(this)}>x</label>
                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brdlogosOF" id="categoryImage">
                                                                                    {
                                                                                        this.state.categoryImage.split('.').pop() === "pdf" || this.state.categoryImage.split('.').pop() === "PDF" ?
                                                                                            <img src="/images/pdfImg.png" className="img-responsive profileImageDivlogoStyleOF" />

                                                                                            :
                                                                                            <img src={this.state.categoryImage} className="img-responsive profileImageDivlogoStyleOF" />
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        (this.state.gotImagecategoryImage ?
                                                                            <div className="col-lg-12 col-md-2 col-sm-12 col-xs-12 nopadding CustomImageUploadOF">
                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding marginsBottom" id="hide">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 brdlogosOF" id="categoryImage">
                                                                                        <img src="/images/loading.gif" className="img-responsive profileImageDivlogoStyleOF" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            null

                                                                        )
                                                                }
                                                            </div>
                                                            <div className="form-margin col-lg-6 col-lg-offset-6 col-md-6 col-sm-12 col-xs-12">
                                                                {
                                                                    (this.props.editId !== "" && typeof this.props.editId !== 'undefined') ?
                                                                        <button onClick={this.updateType.bind(this)} className="btn button3 pull-right">Update</button>
                                                                        :
                                                                        <button onClick={this.submitType.bind(this)} className="btn button3 pull-right">Submit</button>
                                                                }
                                                            </div>
                                                            <br />
                                                        </form>
                                                        :
                                                        <form className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id={this.props.fields.attributeName}>
                                                            <div className="form-margin col-lg-8 col-lg-offset-2 col-md-6 col-sm-12 col-xs-12 pdcls">
                                                                <div id="OneFieldInput">
                                                                    <label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding-left">{this.props.fields.title} <i className="astrick">*</i></label>
                                                                    <input type20="text" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.fieldName} ref="fieldName" id="fieldName" name="fieldName" onChange={this.handleChange.bind(this)} placeholder={this.props.fields.placeholder} required />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="form-margin col-lg-6 col-lg-offset-6 col-md-6 col-sm-12 col-xs-12">
                                                                {
                                                                    (this.props.editId !== "" && typeof this.props.editId !== 'undefined') ?
                                                                        <button onClick={this.updateType.bind(this)} className="btn button3 pull-right">Update</button>
                                                                        :
                                                                        <button onClick={this.submitType.bind(this)} className="btn button3 pull-right">Submit</button>
                                                                }
                                                            </div>
                                                        </form>
                                                }
                                                <div className="oneFieldTable col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <IAssureTable
                                                        tableHeading={this.props.tableHeading}
                                                        twoLevelHeader={this.state.twoLevelHeader}
                                                        dataCount={this.state.dataCount}
                                                        tableData={this.state["tableData" + this.props.fields.attributeName]}
                                                        getData={this.getData.bind(this)}
                                                        tableObjects={this.props.tableObjects}
                                                    />
                                                </div>
                                            </div>
                                            <div id={"bulk-"+this.props.fields.attributeName} className="tab-pane fade in  col-lg-12 col-md-12 col-sm-12 col-xs-12 mt">
                                                <div className="outerForm">
                                                    <BulkUpload
                                                        url={this.props.url}
                                                        data={this.props.data}
                                                        getData={this.getData.bind(this)}
                                                        uploadedData={this.props.uploadedData}
                                                        fileurl={this.props.fileurl}
                                                        getFileDetails={this.props.getFileDetails}
                                                        fileDetails={this.props.fileDetails}
                                                        goodRecordsHeading={this.props.goodRecordsHeading}
                                                        failedtableHeading={this.props.failedtableHeading}
                                                        failedRecordsTable={this.props.failedRecordsTable}
                                                        failedRecordsCount={this.props.failedRecordsCount}
                                                        goodRecordsTable={this.props.goodRecordsTable}
                                                        goodDataCount={this.props.goodDataCount}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(OneFieldForm)


