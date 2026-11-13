    // =========================================================================
    // 3-LEVEL INTERACTIVE PRESENTATION DATA
    // =========================================================================
    const courseData = {
      beginner: {
        label: "المستوى المبتدئ: الأساس المتين وحماية رأس المال",
        slides: [
          {
            title: "1. لماذا يخسر 90% من المبتدئين (وكيف تكون من الـ 10% الرابحين)؟",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <line x1="30" y1="125" x2="470" y2="125" stroke="#1e293b" stroke-width="1"/>
                    <polyline fill="none" stroke="#ef4444" stroke-width="3" points="40,40 120,65 200,55 280,100 360,115 450,130"/>
                    <polyline fill="none" stroke="#10b981" stroke-width="3.5" points="40,105 120,92 200,75 280,66 360,42 450,22"/>
                    <text x="435" y="18" fill="#10b981" font-size="12" font-weight="bold" font-family="Cairo">متداول بخطة (1-2% مخاطرة)</text>
                    <text x="435" y="144" fill="#ef4444" font-size="12" font-weight="bold" font-family="Cairo">متداول عشوائي بدون ستوب</text>
                  </svg>`,
            points: [
              "السبب الأول للخسارة ليس التحليل الفني، بل الطمع والدخول بلوت ضخم لتدبيل الحساب في ليلة واحدة.",
              "المتداول المحترف يعامل التداول كمشروع استثماري تراكمي وليس ضربة حظ.",
              "قاعدة عادل الصارمة: مخاطرتك في الصفقة الواحدة لا تتجاوز أبداً 1% إلى 2% من إيداعك الفعلي."
            ],
            insight: "💡 سر 2026: بونص الهامش 150% في Bullwaves يمنحك هامشاً حراً واسعاً، لكن حساب اللوت يتم دائماً على رصيدك الأساسي!"
          },
          {
            title: "2. قراءة الشموع اليابانية: أين تختبئ أوامر الحيتان؟",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <line x1="150" y1="18" x2="150" y2="130" stroke="#ef4444" stroke-width="3"/>
                    <rect x="135" y="28" width="30" height="28" fill="#ef4444" rx="4"/>
                    <text x="150" y="145" fill="#facc15" font-size="12" text-anchor="middle" font-family="Cairo">شمعة الرجل المشنوق (رفض شرائي)</text>
                    <line x1="350" y1="18" x2="350" y2="130" stroke="#10b981" stroke-width="3"/>
                    <rect x="335" y="92" width="30" height="28" fill="#10b981" rx="4"/>
                    <text x="350" y="145" fill="#10b981" font-size="12" text-anchor="middle" font-family="Cairo">PinBar شرائي من منطقة سيولة</text>
                  </svg>`,
            points: [
              "ذيول الشموع الطويلة (Wicks) هي بصمات البنوك وصناع السوق عند رفض سعر معين.",
              "نموذج الرجل المشنوق (Hanging Man) عند مقاومة قوية يعطينا إشارة مبكرة لانعكاس الاتجاه.",
              "لا ندخل أبداً بمجرد رؤية الشمعة، بل ننتظر إغلاقها ودمجها مع قراءة مؤشر RSI."
            ],
            insight: "💡 في مجتمعنا على التيليجرام ننشر اختبارات عملية أسبوعية لتدريب عينك على كشف هذه النماذج فوراً."
          },
          {
            title: "3. أوقات السيولة الذهبية (متى تتداول ومتى تغلق الشاشة؟)",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <rect x="35" y="45" width="115" height="60" fill="#111827" stroke="#334155" rx="10"/>
                    <text x="92" y="80" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="Cairo">آسيا (تذبذب)</text>
                    <rect x="175" y="25" width="150" height="95" fill="rgba(250,204,21,0.16)" stroke="#facc15" stroke-width="2" rx="12"/>
                    <text x="250" y="75" fill="#facc15" font-size="14" font-weight="bold" text-anchor="middle" font-family="Cairo">تقاطع لندن + نيويورك 🔥</text>
                    <rect x="350" y="45" width="115" height="60" fill="#111827" stroke="#334155" rx="10"/>
                    <text x="407" y="80" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="Cairo">نهاية اليوم</text>
                  </svg>`,
            points: [
              "التداول طوال الـ 24 ساعة هو أسرع طريق للإرهاق الذهني والخسارة الانتقامية.",
              "أقوى وأوضح تحركات الذهب (XAUUSD) تحدث في تقاطع جلسة لندن ونيويورك.",
              "صفقة واحدة أو صفقتان مدروستان بعائد 1:3 كافية تماماً لتحقيق هدفك الأسبوعي."
            ],
            insight: "💡 انتقل الآن للمستوى المتوسط لاكتشاف كيف نفلتر الصفقات الكاذبة باستخدام مؤشر RSI!"
          }
        ]
      },
      intermediate: {
        label: "المستوى المتوسط: أسرار مؤشر RSI والدايفرجنس الخفي",
        slides: [
          {
            title: "1. الخطأ القاتل في استخدام RSI (مستويات 70 و 30)",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <line x1="30" y1="35" x2="470" y2="35" stroke="#ef4444" stroke-dasharray="5,5"/>
                    <text x="70" y="26" fill="#ef4444" font-size="11" font-family="Cairo">مستوى 70 (البيع العشوائي هنا خطأ!)</text>
                    <line x1="30" y1="115" x2="470" y2="115" stroke="#10b981" stroke-dasharray="5,5"/>
                    <polyline fill="none" stroke="#facc15" stroke-width="3" points="40,95 110,60 180,28 250,45 320,20 410,85"/>
                  </svg>`,
            points: [
              "الهواة يبيعون فوراً عند وصول RSI إلى 70، فيواصل الذهب الصعود القوي ويصفر حساباتهم.",
              "في الاتجاه الصاعد القوي، بقاء RSI فوق 50 و 70 دليل على قوة المشترين وليس ضعفهم!",
              "نحن لا نبيع إلا عند ظهور ضعف حقيقي في الزخم يُسمى الدايفرجنس (Divergence)."
            ],
            insight: "💡 في الأكاديمية نشاركك الإعدادات الخاصة لمؤشر RSI على فريم الـ 15 دقيقة والـساعة."
          },
          {
            title: "2. استراتيجية الدايفرجنس القناص (RSI Divergence + CHoCH)",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <polyline fill="none" stroke="#f8fafc" stroke-width="2.5" points="60,70 150,35 230,65 320,18 410,60"/>
                    <line x1="150" y1="35" x2="320" y2="18" stroke="#10b981" stroke-width="2"/>
                    <text x="235" y="15" fill="#10b981" font-size="12" text-anchor="middle" font-family="Cairo">السعر يصنع قمة أعلى</text>
                    <polyline fill="none" stroke="#facc15" stroke-width="2.5" points="60,130 150,92 230,125 320,112 410,138"/>
                    <line x1="150" y1="92" x2="320" y2="112" stroke="#ef4444" stroke-width="2"/>
                    <text x="235" y="144" fill="#ef4444" font-size="12" text-anchor="middle" font-family="Cairo">RSI يصنع قمة أقل = هبوط قوي قادم</text>
                  </svg>`,
            points: [
              "عندما يسجل السعر قمة أعلى، بينما يسجل مؤشر RSI قمة أدنى، فهذا يكشف خروج السيولة الشرائية.",
              "ننتظر كسر أول قاع فرعي (Change of Character) ثم ندخل بصفقة ذات وقف خسارة صغير جداً.",
              "هذه الاستراتيجية تمنحك صفقات بنسبة عائد 1:4 و 1:5 بدقة عالية."
            ],
            insight: "🔥 جرب الآن المستوى المحترف (2026) لترى كيف ندمج هذا النموذج مع مصائد السيولة البنكية!"
          },
          {
            title: "3. التداول الآمن وقت أخبار التضخم الأمريكية (CPI & NFP)",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="50,75 180,75 220,20 245,130 275,45 360,30 440,22"/>
                    <circle cx="220" cy="20" r="6" fill="#ef4444"/>
                    <circle cx="245" cy="130" r="6" fill="#ef4444"/>
                    <text x="240" y="146" fill="#facc15" font-size="12" text-anchor="middle" font-family="Cairo">شمعة الخبر: سحب السيولة بالاتجاهين قبل الحركة الحقيقية</text>
                  </svg>`,
            points: [
              "فتح صفقة قبل الخبر بثوانٍ هو قمار صريح بسبب توسع السبريد والانزلاق السعري.",
              "ننتظر دائماً إغلاق أول شمعة 15 دقيقة بعد الخبر حتى يستهلك السوق صدمة السيولة.",
              "بونص الهامش 150% في Bullwaves يمنح حسابك هامشاً قوياً يتحمل تحركات السوق السريعة."
            ],
            insight: "💡 في قناة الـ VIP نرسل لك السيناريو المرسوم قبل كل خبر أمريكي هام."
          }
        ]
      },
      pro: {
        label: "المستوى المحترف: السيولة المؤسسية (SMC) + فلتر RSI",
        slides: [
          {
            title: "1. مصيدة السيولة (Liquidity Sweep) — أين تضرب البنوك ستوبات المتداولين؟",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <line x1="60" y1="50" x2="380" y2="50" stroke="#94a3b8" stroke-dasharray="4,4"/>
                    <text x="170" y="42" fill="#94a3b8" font-size="12" font-family="Cairo">مقاومة كلاسيكية (تجمع ستوبات البيع $$$)</text>
                    <polyline fill="none" stroke="#facc15" stroke-width="3" points="70,110 130,52 190,95 250,52 310,85 350,20 390,115 450,132"/>
                    <circle cx="350" cy="20" r="7" fill="#ef4444"/>
                    <text x="350" y="14" fill="#ef4444" font-size="12" text-anchor="middle" font-family="Cairo">سحب السيولة (Sweep) + دايفرجنس RSI</text>
                  </svg>`,
            points: [
              "في 2026، الخوارزميات تستهدف مناطق القمم والقيعان المتساوية (Equal Highs/Lows) لضرب أوامر وقف الخسارة.",
              "بدل أن نكون نحن الضحية، نحن ننتظر ضرب تلك المقاومة بذيل شمعة (Sweep) مع وجود دايفرجنس على RSI.",
              "عندها ندخل مع البنوك في الاتجاه الحقيقي من أفضل سعر ممكن!"
            ],
            insight: "👑 هذه المعادلة (Liquidity Sweep + RSI Divergence) هي سر صفقاتنا الخاصة في غرفة الـ VIP."
          },
          {
            title: "2. تقسيم العقود الاحترافي (Scaling Out) وتأمين الأرباح",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <rect x="40" y="30" width="125" height="82" fill="#111827" stroke="#38bdf8" rx="12"/>
                    <text x="102" y="62" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle" font-family="Cairo">الهدف الأول TP1</text>
                    <text x="102" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">إغلاق 50% + تأمين الدخول</text>
                    <rect x="188" y="30" width="125" height="82" fill="#111827" stroke="#facc15" rx="12"/>
                    <text x="250" y="62" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle" font-family="Cairo">الهدف الثاني TP2</text>
                    <text x="250" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">إغلاق 30% من العقد</text>
                    <rect x="335" y="30" width="125" height="82" fill="#111827" stroke="#10b981" rx="12"/>
                    <text x="397" y="62" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle" font-family="Cairo">الهدف الثالث TP3</text>
                    <text x="397" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">20% استمرار بدون مخاطرة</text>
                  </svg>`,
            points: [
              "إدارة الصفقة بعد الدخول أهم من نقطة الدخول نفسها.",
              "عند وصول السعر للهدف الأول (TP1)، نغلق 50% من العقد وننقل وقف الخسارة لنقطة الدخول (Break-Even).",
              "بفضل بونص الهامش 150% في Bullwaves، تمتلك مرونة عالية لتقسيم عقودك براحة تامة."
            ],
            insight: "🚀 في الشريحة الأخيرة بالأسفل ستعرف كيف تنضم إلى الأكاديمية وقناة VIP مجاناً!"
          },
          {
            title: "3. انضم إلى الأكاديمية وقناة VIP مجاناً عبر عرض Bullwaves",
            svg: `<svg viewBox="0 0 500 150" width="100%" height="145">
                    <rect x="45" y="20" width="410" height="110" fill="rgba(16,185,129,0.14)" stroke="#10b981" stroke-width="2" rx="18"/>
                    <text x="250" y="62" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle" font-family="Cairo">🎁 عرض المتابعين: عضوية الأكاديمية وقناة VIP مجاناً ($0)</text>
                    <text x="250" y="98" fill="#ffffff" font-size="13" text-anchor="middle" font-family="Cairo">عند فتح حسابك عبر رابط Bullwaves وتفعيل بونص 150% Margin</text>
                  </svg>`,
            points: [
              "الخطوة 1: سجل حسابك حصرياً عبر رابط Bullwaves المعتمد لتفعيل بونص الهامش 150%.",
              "الخطوة 2: أودع رأس مالك التداولي (أموالك تبقى ملكك في حسابك التداولي + 150% قوة شرائية إضافية).",
              "الخطوة 3: أرسل رقم حسابك (ID) لعادل على التيليجرام (@Adel_RsiFx) لتفعيل عضويتك في الأكاديمية وإضافتك إلى قناة VIP وإرسال جدول اللوتات مجاناً!"
            ],
            insight: "🔥 اضغط الزر الذهبي بالأسفل للتحدث مع عادل أو تفعيل حسابك الآن!"
          }
        ]
      }
    };

    let currentLevel = "beginner";
    let currentSlideIndex = 0;

    function selectLevel(levelKey, btnEl) {
      currentLevel = levelKey;
      currentSlideIndex = 0;
      document.querySelectorAll(".level-tab").forEach(b => b.classList.remove("active"));
      if (btnEl) btnEl.classList.add("active");
      renderSlide();
    }

    function changeSlide(direction) {
      const slides = courseData[currentLevel].slides;
      const nextIndex = currentSlideIndex + direction;
      if (nextIndex >= 0 && nextIndex < slides.length) {
        currentSlideIndex = nextIndex;
        renderSlide();
      } else if (nextIndex >= slides.length) {
        if (currentLevel === "beginner") {
          selectLevel("intermediate", document.querySelectorAll(".level-tab")[1]);
        } else if (currentLevel === "intermediate") {
          selectLevel("pro", document.querySelectorAll(".level-tab")[2]);
        } else {
          (document.getElementById("vip-section") || document.getElementById("plans")).scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    function renderSlide() {
      const levelObj = courseData[currentLevel];
      const slides = levelObj.slides;
      const slide = slides[currentSlideIndex];

      document.getElementById("slide-level-label").textContent = levelObj.label;
      document.getElementById("slide-counter").textContent = `${currentSlideIndex + 1}/${slides.length}`;
      document.getElementById("slide-progress-bar").style.width = `${((currentSlideIndex + 1) / slides.length) * 100}%`;

      document.getElementById("slide-title").textContent = slide.title;
      document.getElementById("slide-visual").innerHTML = slide.svg;

      const ul = document.getElementById("slide-points");
      ul.innerHTML = "";
      slide.points.forEach(pt => {
        const li = document.createElement("li");
        li.textContent = pt;
        ul.appendChild(li);
      });

      const insight = document.getElementById("slide-insight");
      if (insight) insight.textContent = slide.insight;
      document.getElementById("prev-slide-btn").disabled = (currentSlideIndex === 0 && currentLevel === "beginner");

      const nextBtn = document.getElementById("next-slide-btn");
      if (currentLevel === "pro" && currentSlideIndex === slides.length - 1) {
        nextBtn.textContent = "شوف كيف تنضم للأكاديمية";
      } else if (currentSlideIndex === slides.length - 1) {
        nextBtn.textContent = "الشرح القادم";
      } else {
        nextBtn.textContent = "الشرح القادم";
      }
    }

    function setPresetDeposit(val) {
      document.getElementById("deposit-range").value = val;
      document.querySelectorAll("#bonus-calculator .chip-btn").forEach(btn => {
        btn.classList.toggle("active", Number(btn.textContent.trim().split(/\s/)[0].replace(/[$,]/g, "")) === Number(val));
      });
      updateBonusCalc(val);
    }

    function updateBonusCalc(val) {
      const deposit = parseInt(val, 10);
      const bonus = Math.round(deposit * 1.5);
      const totalMargin = deposit + bonus;
      const safeRisk = (deposit * 0.02).toFixed(2);
      const minLot = Math.max(0.01, (deposit / 12000)).toFixed(2);
      const maxLot = Math.max(0.02, (deposit / 6000)).toFixed(2);

      document.getElementById("deposit-val-label").textContent = `$${deposit}`;
      document.getElementById("calc-deposit").textContent = `$${deposit}`;
      document.getElementById("calc-bonus").textContent = `+$${bonus}`;
      document.getElementById("calc-total").textContent = `$${totalMargin}`;
      document.getElementById("calc-risk").textContent = `$${safeRisk}`;
      document.getElementById("calc-lot").textContent = `${minLot} - ${maxLot} Lot`;

      document.getElementById("bar-normal-txt").textContent = `$${deposit}`;
      document.getElementById("bar-bw-txt").textContent = `$${totalMargin}`;
    }

    // =========================================================================
    // 8 DEEP PRO MODULES FOR UNLOCKED VIP MASTERCLASS ($197 PORTAL)
    // =========================================================================
    const vipModulesData = [
      {
        badge: "الوحدة الاحترافية 1 من 8 • الذهب XAUUSD",
        tf: "الفريم المعتمد: M15 / M5 (توقيت مكة: 10:00 ص)",
        title: "1. خريطة سيولة الجلسات للذهب (Asian Range & London Killzone Sweep)",
        summary: "استراتيجية عادل الأساسية لاقتناص 80 إلى 150 نقطة يومياً على الذهب عند افتتاح جلسة لندن بدون ملاحقة السعر.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <rect x="35" y="45" width="150" height="75" fill="rgba(56,189,248,0.09)" stroke="#38bdf8" stroke-dasharray="4,4" rx="8"/>
                <text x="110" y="36" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">نطاق آسيا (Asian High / Low)</text>
                <polyline fill="none" stroke="#94a3b8" stroke-width="2.5" points="45,95 75,55 110,108 145,60 185,80"/>
                <polyline fill="none" stroke="#facc15" stroke-width="3.2" points="185,80 225,20 260,72 290,55 365,128 460,142"/>
                <circle cx="225" cy="20" r="7" fill="#ef4444"/>
                <text x="230" y="14" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">ضرب سيولة آسيا (London Sweep +20 Pips)</text>
                <circle cx="290" cy="55" r="6" fill="#10b981"/>
                <text x="370" y="52" fill="#10b981" font-size="12" font-weight="bold" font-family="Cairo">نقطة الدخول بعد CHoCH + RSI Divergence 🎯</text>
              </svg>`,
        steps: [
          "حدد مستطيل جلسة آسيا من الساعة 00:00 حتى 07:00 بتوقيت غرينتش (أعلى قمة Asian High وأدنى قاع Asian Low).",
          "عند افتتاح لندن (07:00 - 09:30 GMT)، راقب اختراق السعر لأحد طرفي المستطيل بـ 15 إلى 30 نقطة لجمع ستوبات المتداولين.",
          "انزل إلى فريم 5 دقائق (M5) وتأكد من وجود دايفرجنس على مؤشر RSI(14) ثم انتظر كسر أول قاع فرعي (CHoCH).",
          "ضع أمر الدخول عند إعادة اختبار الفجوة السعرية (FVG) التي سببت الكسر."
        ],
        rules: [
          "وقف الخسارة (Stop Loss): يوضع خلف ذيل شمعة السحب (Sweep Wick) بـ 15 نقطة فقط.",
          "الهدف الأول (TP1): منتصف مستطيل آسيا (50% Equilibrium) — نغلق نصف العقد ونؤمن الدخول.",
          "الهدف الثاني (TP2): الطرف المقابل لمستطيل آسيا بالكامل (عائد 1:3 إلى 1:5).",
          "ممنوع الدخول إذا كان عرض مستطيل آسيا أكبر من 220 نقطة (لأن السيولة استُهلكت مبكراً)."
        ],
        secret: "👑 سر عادل الخاص: إذا سحب الذهب قمة آسيا يوم الثلاثاء أو الأربعاء وكان مؤشر الدولار DXY عند دعم قوي، فهذه صفقة بنسبة نجاح تتجاوز 85%!"
      },
      {
        badge: "الوحدة الاحترافية 2 من 8 • فلتر الزخم المؤسسي",
        tf: "الإعدادات: RSI(14) + RSI(9) | مستويات 40 / 50 / 60 / 80",
        title: "2. الإعدادات السرية لمؤشر RSI لعام 2026 (Institutional Range Shift)",
        summary: "كيف تحول مؤشر RSI من أداة تقليدية متأخرة إلى رادار يكشف مناطق التجميع والتصريف البنكية.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <line x1="30" y1="30" x2="530" y2="30" stroke="#10b981" stroke-dasharray="5,5"/>
                <text x="110" y="22" fill="#10b981" font-size="11" font-family="Cairo">سقف الاتجاه الصاعد (80)</text>
                <line x1="30" y1="85" x2="530" y2="85" stroke="#facc15" stroke-width="1.5"/>
                <text x="125" y="78" fill="#facc15" font-size="11" font-weight="bold" font-family="Cairo">منطقة الارتداد المؤسسي في الترند الصاعد (40 - 50)</text>
                <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="40,120 110,45 180,82 260,32 330,78 420,25 500,40"/>
                <circle cx="180" cy="82" r="6" fill="#facc15"/>
                <circle cx="330" cy="78" r="6" fill="#facc15"/>
              </svg>`,
        steps: [
          "أضف مستويين جديدين على مؤشر RSI(14) في منصتك: مستوى 40 ومستوى 60 بالإضافة إلى خط المنتصف 50.",
          "في الاتجاه الصاعد القوي (H1 Bullish): المؤشر يتحرك بين 40 و 80. كل هبوط للمؤشر نحو منطقة 40–45 هو فرصة شراء ذهبية مع الاتجاه!",
          "في الاتجاه الهابط القوي (H1 Bearish): المؤشر يتحرك بين 60 و 20. كل صعود للمؤشر نحو منطقة 55–60 هو فرصة بيع مع الحيتان.",
          "استخدم الدايفرجنس الخفي (Hidden Divergence) للدخول مع استمرار الاتجاه وليس عكسه."
        ],
        rules: [
          "شراء استمراري: السعر يصنع قاعاً أعلى (Higher Low) بينما RSI يصنع قاعاً أدنى عند مستوى 40.",
          "بيع استمراري: السعر يصنع قمة أدنى (Lower High) بينما RSI يصنع قمة أعلى عند مستوى 60.",
          "لا تدخل عكس اتجاه فريم الـ 4 ساعات (H4) إلا إذا وصل RSI إلى 82+ أو 18- مع سحب سيولة رئيسي."
        ],
        secret: "💡 بفضل هذه القاعدة لن تبيع الذهب أبداً وهو في صعود صاروخي لمجرد وصول RSI إلى 70 كما يفعل المبتدئون!"
      },
      {
        badge: "الوحدة الاحترافية 3 من 8 • SMC + RSI Confluence",
        tf: "الفريم المعتمد: H1 للهيكلة ➔ M15 للدخول القناص",
        title: "3. استراتيجية القناص المدمجة (Unmitigated Order Block + FVG + RSI)",
        summary: "الدمج الثلاثي الذي يمنحنا صفقات بوقف خسارة صغير جداً (20-30 نقطة) وأهداف تصل إلى 150 نقطة.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <rect x="60" y="105" width="440" height="32" fill="rgba(16,185,129,0.16)" stroke="#10b981" rx="6"/>
                <text x="280" y="126" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle" font-family="Cairo">منطقة الطلب البنكية (Unmitigated Order Block + FVG)</text>
                <polyline fill="none" stroke="#f8fafc" stroke-width="3" points="70,120 130,35 200,75 260,50 330,115 410,25 490,15"/>
                <circle cx="330" cy="115" r="7" fill="#facc15"/>
                <text x="330" y="152" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle" font-family="Cairo">لمس الـ OB + تشبع بيعي على فريم M5 🎯</text>
              </svg>`,
        steps: [
          "على فريم الساعة (H1): حدد آخر شمعة هابطة قوية قبل انطلاق موجة صعود كسرت القمة السابقة (Bullish Order Block).",
          "اشترط وجود فجوة سعرية واضحة (Fair Value Gap - FVG) مباشرة فوق هذا الـ Order Block (دليل على دخول سيولة بنكية ضخمة).",
          "ضع منبهاً سعرياً عند بداية الفجوة السعرية وانتظر عودة السعر إليها بهدوء.",
          "بمجرد لمس المنطقة ووصول RSI على فريم M15 إلى 35–40، افتح صفقتك مع وضع الستوب أسفل الـ Order Block."
        ],
        rules: [
          "الـ Order Block الصالح للتداول يُستخدم مرة واحدة فقط (First Touch = Best Touch).",
          "إذا عاد السعر للمنطقة، يجب أن يكون الهبوط تصحيحياً بطيئاً وليس شمعة خبر عنيفة.",
          "قسّم دخولك إلى عقدين: عقد يُغلق عند 1:2 لتأمين الصفقة، وعقد يستهدف القمة الرئيسية (1:5)."
        ],
        secret: "👑 مع بونص الهامش 150% في Bullwaves يمكنك وضع أمر معلق (Buy Limit) عند منتصف الـ Order Block (50% Mean Threshold) للحصول على مضاعفة للعائد 1:6!"
      },
      {
        badge: "الوحدة الاحترافية 4 من 8 • تداول الأخبار الأمريكية",
        tf: "أخبار الدولار الحمراء: CPI • NFP • FOMC (الساعة 15:30 / 16:30 مكة)",
        title: "4. بروتوكول الأخبار الفيدرالية (كيف تصطاد حركة الـ Judas Swing بعد الخبر)",
        summary: "بدل المقامرة قبل الخبر بثانية، تعلم كيف تنتظر انتهاء مصيدة صناع السوق وتأخذ الحركة الحقيقية بأمان.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <line x1="210" y1="15" x2="210" y2="150" stroke="#ef4444" stroke-dasharray="4,4"/>
                <text x="210" y="14" fill="#ef4444" font-size="11" text-anchor="middle" font-family="Cairo">لحظة صدور خبر CPI</text>
                <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="50,85 210,85 235,22 265,135 300,60 390,30 490,18"/>
                <circle cx="235" cy="22" r="6" fill="#ef4444"/>
                <circle cx="265" cy="135" r="6" fill="#ef4444"/>
                <circle cx="300" cy="60" r="7" fill="#10b981"/>
                <text x="385" y="75" fill="#10b981" font-size="12" font-weight="bold" font-family="Cairo">الدخول الآمن بعد إغلاق أول شمعة M15 ✅</text>
              </svg>`,
        steps: [
          "قبل الخبر بـ 15 دقيقة: أغلق أي صفقات سكالبينج مفتوحة أو انقل وقف الخسارة إلى نقطة الدخول (Break-Even).",
          "عند صدور الخبر (الدقيقة 0 إلى الدقيقة 15): الخوارزميات تتحرك بسرعة لضرب ستوبات المشترين والبائعين معاً (Whip-saw).",
          "انتظر إغلاق أول شمعة 15 دقيقة كاملة بعد الخبر وحدد أعلى قمة وأدنى قاع لها.",
          "إذا سحبت شمعة الخبر سيولة يومية سابقة ثم أغلقت بشمعة ابتلاعية مع دايفرجنس RSI على فريم M5، ادخل مع الاتجاه الجديد!"
        ],
        rules: [
          "ممنوع منعاً باتاً فتح صفقة في أول 3 دقائق من صدور خبر CPI أو الفائدة الفيدرالية.",
          "قلل حجم اللوت في صفقات الأخبار إلى نصف اللوت المعتاد (مخاطرة 1% كحد أقصى).",
          "الأرباح في حركات الأخبار تتحقق خلال 30 إلى 60 دقيقة — لا تترك الصفقة مفتوحة لليوم التالي."
        ],
        secret: "⚡ في قناة الـ VIP نرسل لك قبل الخبر بنصف ساعة المستويات السعرية التي سينعكس منها الذهب بعد انتهاء فوضى الخبر!"
      },
      {
        badge: "الوحدة الاحترافية 5 من 8 • فك شفرة الخوارزميات",
        tf: "الفريم المعتمد: H1 / M15 (فخ المتداولين الكلاسيكيين)",
        title: "5. كشف مصيدة الإغراء البنكية (Inducement Trap IDM & True Order Block)",
        summary: "لماذا يضرب السعر وقف خسارتك في أول منطقة دعم أو Order Block ثم ينطلق لنفس هدفك؟ الحل الكامل هنا.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <rect x="200" y="75" width="130" height="22" fill="rgba(239,68,68,0.18)" stroke="#ef4444" rx="4"/>
                <text x="265" y="90" fill="#ef4444" font-size="11" text-anchor="middle" font-family="Cairo">مصيدة الإغراء (IDM Trap ❌)</text>
                <rect x="200" y="122" width="220" height="26" fill="rgba(16,185,129,0.2)" stroke="#10b981" rx="4"/>
                <text x="310" y="139" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">منطقة الطلب الحقيقية (Extreme OB + RSI 30 ✅)</text>
                <polyline fill="none" stroke="#facc15" stroke-width="3" points="60,130 170,25 235,76 260,55 315,128 420,20 500,12"/>
              </svg>`,
        steps: [
          "عندما يكسر السعر قمة جديدة (BOS)، يترك خلفه قاعاً فرعياً صغيراً قريباً من السعر؛ هذا القاع يُسمى الإغراء (Inducement - IDM).",
          "90% من المتداولين يضعون أوامر الشراء فوق هذا القاع مباشرة، فتقوم البنوك بكسره عمداً لجمع سيولتهم!",
          "نحن لا نشتري أبداً قبل أن يتم كسر منطقة الـ Inducement (IDM Sweep).",
          "ننتظر وصول السعر إلى منطقة الـ Extreme Order Block في أصل الموجة بالأسفل، وهناك ندخل بأمان تام."
        ],
        rules: [
          "قاعدة ذهبية: (No Inducement = No Entry) إذا لم يسحب السعر سيولة قاع فرعي داخلي، فالـ Order Block هو نفسه السيولة!",
          "تأكد دائماً من تزامن لمس الـ Extreme OB مع وصول مؤشر RSI(14) إلى منطقة تشبع أو دايفرجنس.",
          "هذه القاعدة وحدها ترفع نسبة صفقاتك الرابحة (Win Rate) بأكثر من 30%."
        ],
        secret: "👑 عندما ترى الجميع يشتري من أول دعم، انتظر ضرب ستوباتهم عند الـ Extreme OB وادخل مع صناع السوق!"
      },
      {
        badge: "الوحدة الاحترافية 6 من 8 • الارتباط المؤسسي SMT",
        tf: "الأصول: XAUUSD ↔ DXY | NAS100 ↔ US30",
        title: "6. استراتيجية الارتباط العكسي (DXY vs XAUUSD SMT Divergence & NY Open)",
        summary: "كيف تستخدم مؤشر الدولار الأمريكي (DXY) لكشف الحركات الكاذبة للذهب والعملات قبل حدوثها بدقائق.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <polyline fill="none" stroke="#facc15" stroke-width="3" points="50,60 160,25 260,65 370,22 490,95"/>
                <text x="370" y="15" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">الذهب XAUUSD يفشل في كسر القمة (ضعف)</text>
                <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="50,110 160,142 260,105 370,125 490,55"/>
                <text x="370" y="150" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">مؤشر الدولار DXY يصنع قاعاً أعلى (قوة للدولار = هبوط للذهب)</text>
              </svg>`,
        steps: [
          "افتح شارت مؤشر الدولار (DXY) بجانب شارت الذهب (XAUUSD) أو اليورو (EURUSD) على فريم 15 دقيقة.",
          "في الوضع الطبيعي يتحرك الذهب عكس الدولار؛ إذا صعد الدولار يهبط الذهب.",
          "عندما يصنع الدولار قاعاً جديداً كاسراً الدعم، بينما يرفض الذهب كسر قمته السابقة — هذا يُسمى (SMT Divergence) ويكشف تلاعباً مؤسسياً!",
          "بالنسبة لمؤشر الناسداك (NAS100): أفضل نافذة تداول يومية هي (Silver Bullet) من الساعة 10:00 إلى 11:00 صباحاً بتوقيت نيويورك."
        ],
        rules: [
          "لا تدخل شراء على الذهب واليورو في نفس اللحظة بضعف اللوت لأنك تضاعف مخاطرتك على الدولار مرتين!",
          "في نافذة نيويورك (10:00 - 11:00 AM EST)، ابحث عن أول فجوة سعرية (FVG) تتكون بعد سحب سيولة افتتاح الأسهم الأمريكية (9:30 EST)."
        ],
        secret: "💡 متابعة DXY قبل دخول أي صفقة ذهب تحميك من 70% من الاختراقات الكاذبة وقت جلسة نيويورك!"
      },
      {
        badge: "الوحدة الاحترافية 7 من 8 • الهندسة المالية وبونص 150%",
        tf: "إدارة الحسابات: $100 ➔ $10,000 مع Bullwaves",
        title: "7. هندسة تقسيم العقود ومضاعفة الكفاءة ببونص الهامش 150% (Scaling Out Matrix)",
        summary: "الطريقة الرياضية الدقيقة لاستغلال بونص الـ 150% (Margin Bonus) في Bullwaves لتنمية حسابك بدون خطر المارجن كول.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <rect x="35" y="28" width="150" height="105" fill="#0d1526" stroke="#38bdf8" stroke-width="2" rx="12"/>
                <text x="110" y="60" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="Cairo">المرحلة 1 (TP1)</text>
                <text x="110" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">عند عائد 1:1.5</text>
                <text x="110" y="112" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">إغلاق 50% + تأمين الدخول</text>
                <rect x="205" y="28" width="150" height="105" fill="#0d1526" stroke="#facc15" stroke-width="2" rx="12"/>
                <text x="280" y="60" fill="#facc15" font-size="14" font-weight="bold" text-anchor="middle" font-family="Cairo">المرحلة 2 (TP2)</text>
                <text x="280" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">عند عائد 1:3</text>
                <text x="280" y="112" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">إغلاق 30% من العقد</text>
                <rect x="375" y="28" width="150" height="105" fill="#0d1526" stroke="#10b981" stroke-width="2" rx="12"/>
                <text x="450" y="60" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle" font-family="Cairo">المرحلة 3 (Runner)</text>
                <text x="450" y="88" fill="#fff" font-size="11" text-anchor="middle" font-family="Cairo">عند عائد 1:5+</text>
                <text x="450" y="112" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle" font-family="Cairo">ترك 20% يطير مع الترند</text>
              </svg>`,
        steps: [
          "بونص الـ 150% في Bullwaves هو Margin Bonus (غير قابل للخسارة) يمنحك هامشاً حراً مضاعفاً بـ 2.5 مرة (إيداع $500 = $1,250 قوة شرائية).",
          "بفضل هذا الهامش الكبير، يمكنك تقسيم صفقتك إلى عقدين أو ثلاثة عقود صغيرة (Micro Lots) بدون أن يرفض النظام فتحها بسبب نقص الهامش.",
          "بمجرد تحقيق الصفقة لـ 25–30 نقطة ربح (TP1)، أغلق نصف العقد فوراً وانقل وقف الخسارة لنقطة الدخول.",
          "بهذه الحركة تصبح صفقتك (Risk-Free Trade) — مستحيل أن تخسر فيها سنتاً واحداً حتى لو انعكس السوق!"
        ],
        rules: [
          "جدول الإيداع الذهبي (الأكثر كفاءة مع CPA وبونص 150%): إيداع $500 يمنحك +$750 بونص = $1,250 هامش حر، وتدخل بلوت 0.04 إلى 0.06 مقسم على جزأين.",
          "لا تحسب نسبة الـ 2% مخاطرة على مجموع البونص، بل احسبها دائماً على إيداعك الأساسي الفعلي باستخدام الحاسبة بالأسفل."
        ],
        secret: "🔥 المتداول الذي يؤمن صفقته عند TP1 يتداول بأعصاب باردة تماماً، وهذا هو الفرق بين المحترف والمقامر!"
      },
      {
        badge: "الوحدة الاحترافية 8 من 8 • السيطرة النفسية وخطة النمو",
        tf: "خطة الـ 90 يوماً: التراكم المالي الصارم",
        title: "8. الدرع النفسي وقواعد غرف التداول الخاصة (Anti-Tilt & Compounding Plan)",
        summary: "القوانين الحديدية التي تحمي أرباحك الشهرية وتمنعك من الوقوع في فخ التداول الانتقامي.",
        svg: `<svg viewBox="0 0 560 165" width="100%" height="155">
                <polyline fill="none" stroke="#10b981" stroke-width="4" points="50,135 130,122 210,104 290,82 370,55 450,28 510,15"/>
                <circle cx="210" cy="104" r="5" fill="#facc15"/>
                <circle cx="370" cy="55" r="5" fill="#facc15"/>
                <circle cx="510" cy="15" r="7" fill="#10b981"/>
                <text x="280" y="145" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="Cairo">نمو الحساب التراكمي بالتزام 1.5% مخاطرة وحد أقصى صفقتين يومياً 📈</text>
              </svg>`,
        steps: [
          "قانون الاستوبين (The 2-Strike Rule): إذا ضربت صفقتان متتاليتان وقف الخسارة في يوم واحد (-3% إلى -4%)، تُغلق المنصة فوراً حتى اليوم التالي.",
          "قانون يوم الجمعة: بعد الساعة 17:00 بتوقيت غرينتش يوم الجمعة، لا نفتح صفقات جديدة لتجنب فجوات الافتتاح الأسبوعي.",
          "سحب الأرباح الدوري: كلما نما حسابك بنسبة 25%، اسحب نصف الأرباح إلى محفظتك واترك النصف الآخر لتكبير حجم اللوت تدريجياً.",
          "استخدم دائماً فاحص جودة الصفقة (A+ Validator) بالأسفل قبل تنفيذ أي أمر في السوق."
        ],
        rules: [
          "التداول الممل والمنضبط هو التداول المربح؛ إذا شعرت بالحماس الزائد أو الغضب، فهذه إشارة للتوقف عن التداول فوراً.",
          "تابع التحديثات اليومية في قناة الـ VIP وتواصل مع عادل (@Adel_RsiFx) لمراجعة أداء حسابك أسبوعياً."
        ],
        secret: "👑 مبروك إتمامك للوحدات الاحترافية الـ 8! الآن استخدم الحاسبة وفاحص الصفقات بالأسفل قبل كل صفقة تدخلها في السوق."
      }
    ];

    let currentVipModuleIndex = 0;

    function selectVipModule(idx, btnEl) {
      currentVipModuleIndex = idx;
      const navBtns = document.querySelectorAll("#vip-modules-nav .chip-btn");
      navBtns.forEach((b, i) => b.classList.toggle("active", i === idx));
      renderVipModule();
    }

    function stepVipModule(dir) {
      const next = (currentVipModuleIndex + dir + vipModulesData.length) % vipModulesData.length;
      selectVipModule(next);
    }

    function renderVipModule() {
      const m = vipModulesData[currentVipModuleIndex];
      document.getElementById("vip-mod-badge").textContent = m.badge;
      document.getElementById("vip-mod-tf").textContent = m.tf;
      document.getElementById("vip-mod-title").textContent = m.title;
      document.getElementById("vip-mod-summary").textContent = m.summary;
      document.getElementById("vip-mod-svg").innerHTML = m.svg;

      const stepsUl = document.getElementById("vip-mod-steps");
      stepsUl.innerHTML = "";
      m.steps.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        stepsUl.appendChild(li);
      });

      const rulesUl = document.getElementById("vip-mod-rules");
      rulesUl.innerHTML = "";
      m.rules.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        rulesUl.appendChild(li);
      });

      document.getElementById("vip-mod-secret").textContent = m.secret;
    }

    function runVipPipCalc() {
      const bal = Math.max(50, parseFloat(document.getElementById("vip-calc-bal").value) || 500);
      const asset = document.getElementById("vip-calc-asset").value;
      const riskPct = parseFloat(document.getElementById("vip-calc-riskpct").value) || 2.0;
      const slPips = Math.max(5, parseFloat(document.getElementById("vip-calc-slpips").value) || 25);

      const totalMargin = Math.round(bal * 2.5);
      const riskUsd = bal * (riskPct / 100.0);
      // Standard pip value per 1.00 lot (~$10/pip for FX & Gold 100oz standard contract)
      const pipValPerLot = asset === "NAS100" ? 1.0 : 10.0;
      const rawLot = riskUsd / (slPips * pipValPerLot);
      const safeLot = Math.max(0.01, Math.round(rawLot * 100) / 100).toFixed(2);
      const tp2Usd = (riskUsd * 3.0).toFixed(2);

      document.getElementById("vip-out-margin").textContent = `$${totalMargin.toLocaleString()}`;
      document.getElementById("vip-out-riskusd").textContent = `$${riskUsd.toFixed(2)}`;
      document.getElementById("vip-out-lot").textContent = `${safeLot} Lot`;
      document.getElementById("vip-out-tp2").textContent = `+$${tp2Usd}`;
    }

    function updateChecklistScore() {
      const chks = document.querySelectorAll(".vip-chk");
      let checkedCount = 0;
      chks.forEach(c => { if (c.checked) checkedCount++; });
      const statusBox = document.getElementById("vip-chk-status");
      if (checkedCount === chks.length) {
        statusBox.style.background = "rgba(16,185,129,0.2)";
        statusBox.style.color = "#34d399";
        statusBox.textContent = "🚀 الصفقة مكتملة الشروط 6/6 (A+ Sniper Setup) — يمكنك التنفيذ الآن بانضباط!";
      } else if (checkedCount >= 4) {
        statusBox.style.background = "rgba(250,204,21,0.16)";
        statusBox.style.color = "#facc15";
        statusBox.textContent = `⚡ اكتمل ${checkedCount} من 6 شروط — الصفقة جيدة لكن يفضل انتظار اكتمال جميع الشروط!`;
      } else {
        statusBox.style.background = "rgba(239,68,68,0.15)";
        statusBox.style.color = "#fca5a5";
        statusBox.textContent = `⏳ اكتمل ${checkedCount} من 6 شروط فقط — لا تدخل السوق الآن، انتظر اكتمال شروط القناص!`;
      }
    }

    function unlockVipVault() {
      const code = (document.getElementById("vip-secret-input").value || "").trim().toUpperCase();
      if (["ADEL2026", "VIP2026", "ADEL150", "BULLWAVES"].includes(code)) {
        document.getElementById("vip-vault-locked").style.display = "none";
        document.getElementById("vip-vault-unlocked").style.display = "block";
        document.getElementById("vip-code-error").style.display = "none";
        renderVipModule();
        runVipPipCalc();
      } else {
        document.getElementById("vip-code-error").style.display = "block";
      }
    }

    renderSlide();
    updateBonusCalc(250);
    renderVipModule();
    runVipPipCalc();

    function copyVipSignal(text, btn) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      const orig = btn.innerHTML;
      btn.innerHTML = '✅ تم نسخ المستويات بنجاح!';
      btn.style.borderColor = '#10b981';
      btn.style.color = '#34d399';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2200);
    }
