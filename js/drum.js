// ===========================
// DRUM ROLLER - iOS Style
// ===========================

class DrumRoller {
    constructor(container, max, onChange) {
        this.container = container;
        this.max = max;
        this.onChange = onChange;
        this.value = 0;
        this.itemHeight = container.classList.contains('small') ? 44 : 56;
        this.isDragging = false;
        this.startY = 0;
        this.startOffset = 0;
        this.currentOffset = 0;
        this.track = null;
        this.init();
    }

    init() {
        this.track = document.createElement('div');
        this.track.className = 'drum-track';
        this.container.appendChild(this.track);
        this.buildItems();
        this.setOffset(0, false);
        this.bindEvents();
    }

    buildItems() {
        this.track.innerHTML = '';
        for (let i = 0; i <= this.max; i++) {
            const item = document.createElement('div');
            item.className = 'drum-item';
            item.textContent = String(i).padStart(2, '0');
            this.track.appendChild(item);
        }
        this.updateActive();
    }

    setOffset(offset, animate = true) {
        const maxOffset = -(this.max * this.itemHeight);
        offset = Math.max(maxOffset, Math.min(0, offset));
        this.currentOffset = offset;
        if (!animate) this.track.style.transition = 'none';
        else this.track.style.transition = 'transform 0.15s ease-out';
        this.track.style.transform = `translateY(${offset}px)`;
        this.value = Math.round(Math.abs(offset) / this.itemHeight);
        this.updateActive();
        if (this.onChange) this.onChange(this.value);
    }

    updateActive() {
        const items = this.track.querySelectorAll('.drum-item');
        items.forEach((item, i) => {
            item.classList.toggle('active', i === this.value);
        });
    }

    setValue(val) {
        const offset = -(val * this.itemHeight);
        this.track.style.transition = 'none';
        this.setOffset(offset, false);
        setTimeout(() => {
            this.track.style.transition = 'transform 0.15s ease-out';
        }, 50);
    }

    bindEvents() {
        // Mouse
        this.container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startY = e.clientY;
            this.startOffset = this.currentOffset;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            const diff = e.clientY - this.startY;
            this.setOffset(this.startOffset + diff);
        });

        document.addEventListener('mouseup', () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.snap();
        });

        // Touch
        this.container.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            this.startY = e.touches[0].clientY;
            this.startOffset = this.currentOffset;
            e.preventDefault();
        }, { passive: false });

        this.container.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            const diff = e.touches[0].clientY - this.startY;
            this.setOffset(this.startOffset + diff);
            e.preventDefault();
        }, { passive: false });

        this.container.addEventListener('touchend', () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.snap();
        });

        // Mouse wheel
        this.container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -4 : 4;
            const newVal = Math.max(0, Math.min(this.max, this.value - delta));
            this.setValue(newVal);
            if (this.onChange) this.onChange(this.value);
        }, { passive: false });
    }

    snap() {
        const snapped = -(Math.round(Math.abs(this.currentOffset) / this.itemHeight) * this.itemHeight);
        this.setOffset(snapped);
    }
}

// ===========================
// DOM 변환 함수
// ===========================
const drumRollers = {};

function createDrumHTML(id, max, isSmall = false) {
    const sizeClass = isSmall ? 'small' : '';
    return `<div class="drum-container ${sizeClass}" data-drum-id="${id}" data-max="${max}"></div>`;
}

function replaceDrum(minId, secId, wrapperSelector, isSmall = false) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const minInput = document.getElementById(minId);
    const secInput = document.getElementById(secId);
    if (!minInput || !secInput) return;

    const initMin = parseInt(minInput.value || 0);
    const initSec = parseInt(secInput.value || 0);
    const minMax = parseInt(minInput.max || 30);
    const secMax = 59;
    const sep = isSmall ? 'small' : '';

    wrapper.innerHTML = `
        ${createDrumHTML(minId, minMax, isSmall)}
        <span class="drum-separator ${sep}">:</span>
        ${createDrumHTML(secId, secMax, isSmall)}
    `;

    const minContainer = wrapper.querySelector(`[data-drum-id="${minId}"]`);
    const secContainer = wrapper.querySelector(`[data-drum-id="${secId}"]`);

    drumRollers[minId] = new DrumRoller(minContainer, minMax, (val) => {
        minInput.value = val;
        minInput.dispatchEvent(new Event('input'));
    });

    drumRollers[secId] = new DrumRoller(secContainer, secMax, (val) => {
        secInput.value = val;
        secInput.dispatchEvent(new Event('input'));
    });

    drumRollers[minId].setValue(initMin);
    drumRollers[secId].setValue(initSec);
}

function replaceClassDrums(minClass, secClass, isSmall = true) {
    const minInputs = document.querySelectorAll(`.${minClass}`);
    const secInputs = document.querySelectorAll(`.${secClass}`);

    minInputs.forEach((minInput, i) => {
        const secInput = secInputs[i];
        if (!secInput) return;

        const wrapper = minInput.closest('.time-inputs');
        if (!wrapper) return;

        const uid = `${minClass}_${i}`;
        const minMax = parseInt(minInput.max || 30);
        const secMax = 59;

        wrapper.innerHTML = `
            <div class="drum-container small" data-drum-uid="${uid}_min"></div>
            <span class="drum-separator small">:</span>
            <div class="drum-container small" data-drum-uid="${uid}_sec"></div>
        `;

        const minContainer = wrapper.querySelector(`[data-drum-uid="${uid}_min"]`);
        const secContainer = wrapper.querySelector(`[data-drum-uid="${uid}_sec"]`);

        drumRollers[`${uid}_min`] = new DrumRoller(minContainer, minMax, (val) => {
            minInput.value = val;
            minInput.dispatchEvent(new Event('input'));
        });

        drumRollers[`${uid}_sec`] = new DrumRoller(secContainer, secMax, (val) => {
            secInput.value = val;
            secInput.dispatchEvent(new Event('input'));
        });
    });
}

// ===========================
// 드럼 값 업데이트 헬퍼
// ===========================
function setDrumValue(id, val) {
    if (drumRollers[id]) drumRollers[id].setValue(val);
}

document.addEventListener('DOMContentLoaded', () => {
    // Simple mode
    replaceDrum('runMin', 'runSec', '#simpleMode .input-group:nth-child(2) .time-inputs');
    replaceDrum('roxzoneMin', 'roxzoneSec', '#simpleMode .input-group:nth-child(3) .time-inputs');
    replaceDrum('stationsMin', 'stationsSec', '#simpleMode .input-group:nth-child(4) .time-inputs');

    // Advanced mode
    replaceClassDrums('run-min', 'run-sec');
    replaceClassDrums('station-min', 'station-sec');
    replaceDrum('roxzoneMinAdv', 'roxzoneSecAdv', '#advancedMode > .input-group .time-inputs');
});
