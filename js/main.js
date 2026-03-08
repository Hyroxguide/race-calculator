// ===========================
// HYROX CALCULATOR - MAIN SCRIPT
// Simple & Clean Version
// ===========================

// === Data: 2025 Seoul Open Singles Averages ===
const AVERAGES = {
    men: {
        overall: { min: 87, sec: 59 },
        run: { min: 44, sec: 21 },
        roxzone: { min: 7, sec: 43 },
        stations: { min: 36, sec: 1 },
        stationDetails: {
            skierg: { min: 4, sec: 32 },
            sledpush: { min: 2, sec: 41 },
            sledpull: { min: 5, sec: 22 },
            burpees: { min: 4, sec: 52 },
            row: { min: 4, sec: 50 },
            farmerscarry: { min: 2, sec: 22 },
            lunges: { min: 4, sec: 46 },
            wallballs: { min: 6, sec: 36 }
        },
        participants: 702
    },
    women: {
        overall: { min: 99, sec: 31 },
        run: { min: 50, sec: 31 },
        roxzone: { min: 8, sec: 30 },
        stations: { min: 41, sec: 7 },
        stationDetails: {
            skierg: { min: 5, sec: 18 },
            sledpush: { min: 2, sec: 43 },
            sledpull: { min: 6, sec: 33 },
            burpees: { min: 6, sec: 26 },
            row: { min: 5, sec: 30 },
            farmerscarry: { min: 2, sec: 28 },
            lunges: { min: 5, sec: 5 },
            wallballs: { min: 7, sec: 2 }
        },
        participants: 352
    }
};

// === Helper Functions ===
function timeToSeconds(min, sec) {
    return parseInt(min || 0) * 60 + parseInt(sec || 0);
}

function secondsToTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function formatTimeDifference(seconds) {
    const absSeconds = Math.abs(seconds);
    const minutes = Math.floor(absSeconds / 60);
    const secs = absSeconds % 60;
    const sign = seconds < 0 ? '-' : '+';
    return `${sign}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// === Mode Toggle ===
function setupModeToggle() {
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const simpleMode = document.getElementById('simpleMode');
    const advancedMode = document.getElementById('advancedMode');

    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'simple') {
                simpleMode.style.display = 'block';
                advancedMode.style.display = 'none';
            } else {
                simpleMode.style.display = 'none';
                advancedMode.style.display = 'block';
            }
            calculateResult();
        });
    });
}

// === Fill Average Values ===
function fillAverageValues() {
    const division = document.querySelector('input[name="division"]:checked').value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const avgData = AVERAGES[division];

    if (mode === 'simple') {
        // Calculate average 1km pace
        const runTotalSec = timeToSeconds(avgData.run.min, avgData.run.sec);
        const runPaceSec = Math.round(runTotalSec / 8);
        const runPaceMin = Math.floor(runPaceSec / 60);
        const runPaceSecRem = runPaceSec % 60;
        
        document.getElementById('runMin').value = runPaceMin;
        document.getElementById('runSec').value = runPaceSecRem;
        document.getElementById('roxzoneMin').value = avgData.roxzone.min;
        document.getElementById('roxzoneSec').value = avgData.roxzone.sec;
        document.getElementById('stationsMin').value = avgData.stations.min;
        document.getElementById('stationsSec').value = avgData.stations.sec;
    } else {
        // Advanced mode: fill each run with average pace
        const runTotalSec = timeToSeconds(avgData.run.min, avgData.run.sec);
        const runPaceSec = Math.round(runTotalSec / 8);
        const runPaceMin = Math.floor(runPaceSec / 60);
        const runPaceSecRem = runPaceSec % 60;
        
        // Fill all 8 runs
        const runMins = document.querySelectorAll('.run-min');
        const runSecs = document.querySelectorAll('.run-sec');
        runMins.forEach(input => input.value = runPaceMin);
        runSecs.forEach(input => input.value = runPaceSecRem);

        // Fill stations
        const stationMins = document.querySelectorAll('.station-min');
        const stationSecs = document.querySelectorAll('.station-sec');
        const stationKeys = ['skierg', 'sledpush', 'sledpull', 'burpees', 'row', 'farmerscarry', 'lunges', 'wallballs'];
        
        stationMins.forEach((input, index) => {
            const stationKey = stationKeys[index];
            input.value = avgData.stationDetails[stationKey].min;
        });
        
        stationSecs.forEach((input, index) => {
            const stationKey = stationKeys[index];
            input.value = avgData.stationDetails[stationKey].sec;
        });

        // Fill roxzone
        document.getElementById('roxzoneMinAdv').value = avgData.roxzone.min;
        document.getElementById('roxzoneSecAdv').value = avgData.roxzone.sec;
    }

    calculateResult();
}

// === Reset ===
function resetAllInputs() {
    // Simple mode
    document.getElementById('runMin').value = 0;
    document.getElementById('runSec').value = 0;
    document.getElementById('roxzoneMin').value = 0;
    document.getElementById('roxzoneSec').value = 0;
    document.getElementById('stationsMin').value = 0;
    document.getElementById('stationsSec').value = 0;

    // Advanced mode
    document.querySelectorAll('.run-min, .run-sec, .station-min, .station-sec').forEach(input => {
        input.value = 0;
    });
    document.getElementById('roxzoneMinAdv').value = 0;
    document.getElementById('roxzoneSecAdv').value = 0;

    // Reset display
    document.getElementById('predictedTime').textContent = '00:00:00';
    document.getElementById('comparison').textContent = '평균과 비교';
    document.getElementById('runBreakdown').textContent = '--:--';
    document.getElementById('roxzoneBreakdown').textContent = '--:--';
    document.getElementById('stationsBreakdown').textContent = '--:--';
}

// === Calculate Result ===
function calculateResult() {
    const division = document.querySelector('input[name="division"]:checked').value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const avgData = AVERAGES[division];

    let runTotal = 0;
    let roxzoneTotal = 0;
    let stationsTotal = 0;

    if (mode === 'simple') {
        // Simple mode calculation
        const runMin = parseInt(document.getElementById('runMin').value || 0);
        const runSec = parseInt(document.getElementById('runSec').value || 0);
        const runPaceSec = timeToSeconds(runMin, runSec);
        runTotal = runPaceSec * 8; // 8 runs of 1km each

        const roxzoneMin = parseInt(document.getElementById('roxzoneMin').value || 0);
        const roxzoneSec = parseInt(document.getElementById('roxzoneSec').value || 0);
        roxzoneTotal = timeToSeconds(roxzoneMin, roxzoneSec);

        const stationsMin = parseInt(document.getElementById('stationsMin').value || 0);
        const stationsSec = parseInt(document.getElementById('stationsSec').value || 0);
        stationsTotal = timeToSeconds(stationsMin, stationsSec);
    } else {
        // Advanced mode calculation
        // Sum all 8 runs
        const runMins = document.querySelectorAll('.run-min');
        const runSecs = document.querySelectorAll('.run-sec');
        runMins.forEach((input, index) => {
            const min = parseInt(input.value || 0);
            const sec = parseInt(runSecs[index].value || 0);
            runTotal += timeToSeconds(min, sec);
        });

        // Sum all 8 stations
        const stationMins = document.querySelectorAll('.station-min');
        const stationSecs = document.querySelectorAll('.station-sec');
        stationMins.forEach((input, index) => {
            const min = parseInt(input.value || 0);
            const sec = parseInt(stationSecs[index].value || 0);
            stationsTotal += timeToSeconds(min, sec);
        });

        // Roxzone
        const roxzoneMin = parseInt(document.getElementById('roxzoneMinAdv').value || 0);
        const roxzoneSec = parseInt(document.getElementById('roxzoneSecAdv').value || 0);
        roxzoneTotal = timeToSeconds(roxzoneMin, roxzoneSec);
    }

    // Calculate total
    const totalSeconds = runTotal + roxzoneTotal + stationsTotal;

    // Skip if all zeros
    if (totalSeconds === 0) {
        document.getElementById('predictedTime').textContent = '00:00:00';
        document.getElementById('comparison').textContent = '기록을 입력해주세요';
        return;
    }

    // Display predicted time
    document.getElementById('predictedTime').textContent = secondsToTime(totalSeconds);

    // Calculate average comparison
    const avgTotal = timeToSeconds(avgData.overall.min, avgData.overall.sec);
    const diff = totalSeconds - avgTotal;
    const diffText = formatTimeDifference(diff);
    
    let comparisonHTML = '';
    if (diff < 0) {
        comparisonHTML = `평균 대비 <span style="color: #FFFF00; font-weight: 600;">${diffText} 빠름</span>`;
    } else if (diff > 0) {
        comparisonHTML = `평균 대비 <span style="color: #FF5722; font-weight: 600;">${diffText} 느림</span>`;
    } else {
        comparisonHTML = '평균과 동일';
    }
    comparisonHTML += `<br><span style="font-size: 0.9em; opacity: 0.7;">(2025 서울 평균: ${secondsToTime(avgTotal)})</span>`;
    
    document.getElementById('comparison').innerHTML = comparisonHTML;

    // Calculate percentages
    const runPercent = (runTotal / totalSeconds * 100).toFixed(1);
    const roxzonePercent = (roxzoneTotal / totalSeconds * 100).toFixed(1);
    const stationsPercent = (stationsTotal / totalSeconds * 100).toFixed(1);

    // Update breakdown
    document.getElementById('runBreakdown').textContent = `${secondsToTime(runTotal)} (${runPercent}%)`;
    document.getElementById('roxzoneBreakdown').textContent = `${secondsToTime(roxzoneTotal)} (${roxzonePercent}%)`;
    document.getElementById('stationsBreakdown').textContent = `${secondsToTime(stationsTotal)} (${stationsPercent}%)`;
}

// === Share Result ===
function shareResult() {
    const predictedTime = document.getElementById('predictedTime').textContent;
    const division = document.querySelector('input[name="division"]:checked').value === 'men' ? '남자' : '여자';
    const runBreakdown = document.getElementById('runBreakdown').textContent;
    const roxzoneBreakdown = document.getElementById('roxzoneBreakdown').textContent;
    const stationsBreakdown = document.getElementById('stationsBreakdown').textContent;

    const shareText = `🏃 하이록스 예상 기록 (오픈 싱글 ${division})

⏱️ 예상 완주: ${predictedTime}

📊 구간별 기록:
🏃 런: ${runBreakdown}
🔄 록스존: ${roxzoneBreakdown}
💪 스테이션: ${stationsBreakdown}

📱 하이록스 기록 계산기
https://hyroxguide.kr
@hyrox.guide.kr`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과가 복사되었습니다!\n인스타그램이나 카톡에 공유해보세요.');
        }).catch(err => {
            console.error('복사 실패:', err);
            alert('복사에 실패했습니다. 다시 시도해주세요.');
        });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('결과가 복사되었습니다!\n인스타그램이나 카톡에 공유해보세요.');
        } catch (err) {
            console.error('복사 실패:', err);
            alert('복사에 실패했습니다. 다시 시도해주세요.');
        }
        document.body.removeChild(textarea);
    }
}

// === Setup Input Listeners ===
function setupInputListeners() {
    // Simple mode inputs
    const simpleInputs = [
        'runMin', 'runSec',
        'roxzoneMin', 'roxzoneSec',
        'stationsMin', 'stationsSec'
    ];
    
    simpleInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateResult);
            input.addEventListener('change', calculateResult);
        }
    });

    // Advanced mode inputs
    document.querySelectorAll('.run-min, .run-sec, .station-min, .station-sec').forEach(input => {
        input.addEventListener('input', calculateResult);
        input.addEventListener('change', calculateResult);
    });

    const roxzoneMinAdv = document.getElementById('roxzoneMinAdv');
    const roxzoneSecAdv = document.getElementById('roxzoneSecAdv');
    if (roxzoneMinAdv) roxzoneMinAdv.addEventListener('input', calculateResult);
    if (roxzoneSecAdv) roxzoneSecAdv.addEventListener('input', calculateResult);
}

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🏃 HYROX Calculator - Initialized');
    
    // Setup event listeners
    setupModeToggle();
    setupInputListeners();
    
    // Button listeners
    document.getElementById('fillBtn').addEventListener('click', fillAverageValues);
    document.getElementById('resetBtn').addEventListener('click', resetAllInputs);
    document.getElementById('shareBtn').addEventListener('click', shareResult);
    
    // Division change
    document.querySelectorAll('input[name="division"]').forEach(radio => {
        radio.addEventListener('change', calculateResult);
    });
    
    // Initial calculation
    fillAverageValues();
    
    console.log('✅ All systems ready!');
});
