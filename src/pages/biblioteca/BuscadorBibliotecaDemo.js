import React from 'react';

class BuscadorBibliotecaDemo extends React.Component {
    constructor(props) {
      super(props)
      
      const defaultFileType = "json"; 
      this.fileNames = {
          json: "states.json",
        csv: "states.csv",
        text: "states.txt"
      }    
      this.state = {
        fileType: defaultFileType,
        fileDownloadUrl: null,
        status: "",
          data: [
            { state: "Arizona",        electors: 11 },
            { state: "Florida",        electors: 29 },
            { state: "Iowa",           electors:  6 },
            { state: "Michigan",       electors: 16 },
            { state: "North Carolina", electors: 15 },
            { state: "Ohio",           electors: 18 },
            { state: "Pennsylvania",   electors: 20 },
            { state: "Wisconsin",      electors: 10 },
        ]
      }
        this.changeFileType = this.changeFileType.bind(this);
        this.download = this.download.bind(this);
        this.upload = this.upload.bind(this);
        this.openFile = this.openFile.bind(this);
    }
    
    changeFileType (event) {
      const value = event.target.value;
        this.setState({fileType: value});
    }
    
    download (event) {
      event.preventDefault();
        // Prepare the file
      let output;
      if (this.state.fileType === "json") {
          output = JSON.stringify({states: this.state.data}, 
            null, 4);
      } else if (this.state.fileType === "csv"){
        // Prepare data:
        let contents = [];
        contents.push (["State", "Electors"]);
        this.state.data.forEach(row => {
            contents.push([row.state, row.electors])
        });
        output = this.makeCSV(contents);
      } else if (this.state.fileType === "text"){
        // Prepare data:
        output = '';
        this.state.data.forEach(row => {
            output += `${row.state}: ${row.electors}\n`
        });
      }
      // Download it
      const blob = new Blob([output]);
      const fileDownloadUrl = URL.createObjectURL(blob);
      this.setState ({fileDownloadUrl: fileDownloadUrl}, 
        () => {
          this.dofileDownload.click(); 
          URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
          this.setState({fileDownloadUrl: ""})
      })    
    }
  
    /**
     * Function returns the content as a CSV string
     * See https://stackoverflow.com/a/20623188/64904
     * Parameter content:
     *   [
     *.     [header1, header2],
     *.     [data1, data2]
     *.     ...
     *.  ]
     * NB Does not support Date items
     */
    makeCSV (content) {
        let csv = '';
      content.forEach(value => {
          value.forEach((item, i) => {
          let innerValue = item === null ? '' : item.toString();
          let result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) {
            result = '"' + result + '"'
          }
          if (i > 0) {csv += ','}
          csv += result;
        })
          csv += '\n';
        })
      return csv
    }
    
    upload(event) {
        event.preventDefault();
      this.dofileUpload.click()
    }
    
    /**
     * Process the file within the React app. We're NOT uploading it to the server!
     */
    openFile(evt) {
        let status = []; // Status output
        const fileObj = evt.target.files[0];
        const reader = new FileReader();
            
        let fileloaded = e => {
          // e.target.result is the file's content as text
          const fileContents = e.target.result;
          status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
          // Show first 80 characters of the file
          const first80char = fileContents.substring(0,80);
          status.push (`First 80 characters of the file:\n${first80char}`)
          this.setState ({status: status.join("\n")})
        }
        
        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);  
    }
    
    render() {
      return (
        <div>
          <h2>2020 US Swing States</h2>
          <table>
            <thead>
            <tr><th>State</th><th>Electors</th></tr>
            </thead>
            <tbody>
            {this.state.data.map(item => (
              <tr key={item.state}>
                <td>{item.state}</td><td>{item.electors}</td>
              </tr>
            ))}          
              </tbody>
          </table>
          <form>
            <span className="mr">File type:</span>
            <select name="fileType"
              onChange={this.changeFileType}
              value={this.state.fileType}
              className="mr"
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="text">Text</option>
            </select>
            
            <button onClick={this.download}>
              Download the file!
            </button>
            
            <a className="hidden"
               download={this.fileNames[this.state.fileType]}
               href={this.state.fileDownloadUrl}
               ref={e=>this.dofileDownload = e}
            >download it</a>
            
            <p><button onClick={this.upload}>
              Upload a file!
            </button> Only json, csv, and text files are ok.</p>
  
            <input type="file" className="hidden"
              multiple={false}
              accept=".json,.csv,.txt,.text,application/json,text/csv,text/plain"
              onChange={evt => this.openFile(evt)}
              ref={e=>this.dofileUpload = e}
            />
          </form>
          <pre className="status">{this.state.status}</pre>
        </div>
        )
    }
  }
  
export default BuscadorBibliotecaDemo;