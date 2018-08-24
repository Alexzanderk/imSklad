export default class InpuTypeFile {
    constructor({element, fileOutput}) {
        this.element = document.querySelector(element);
        this.fileOutput = document.querySelector(fileOutput);
        
        if (this.element) this.element.addEventListener('change', this.showFiles.bind(this));
    }

    showFiles(e) {
        let fileName;
        
        if (this.files && this.files.length > 1) {
            fileName = this.files.length;
        } else {
            fileName = e.target.value.split('\\').pop();
        }

        this.fileOutput.innerHTML = fileName;
    }
};