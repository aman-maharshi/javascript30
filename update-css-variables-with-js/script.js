// Variables
const btn = document.getElementById('btn'),
    image = document.querySelector('.image'),
    inputs = document.querySelectorAll('.controls input');


// Event Listeners
btn.addEventListener('click', () => {
    image.src = 'https://source.unsplash.com/random/800x400';
    btn.disabled = true;
});

inputs.forEach((item)=> {
    item.addEventListener('change', handleUpdateShort);
    // item.addEventListener('mousemove', handleUpdate);
})


// Functions
function handleUpdate() {
    // console.log(this.name);
    // console.log(this.value);
    // console.log(typeof(this.value));
    if (this.name == 'base') {
        document.documentElement.style.setProperty('--base', this.value);
    }
    if(this.name == 'spacing') {
        document.documentElement.style.setProperty('--spacing', this.value+this.dataset.sizing);
    }
    if(this.name == 'blur') {
        document.documentElement.style.setProperty('--blur', this.value+'px');
    }
}
function handleUpdateShort() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
} 