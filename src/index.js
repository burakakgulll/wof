var sectors = [
  { color: '#000000', label: Math.random().toFixed(5)},
  { color: '#008F11', label:Math.random().toFixed(5)},
  { color: '#000000', label: Math.random().toFixed(5)},
  { color: '#008F11', label:Math.random().toFixed(5)},
  { color: '#000000', label: Math.random().toFixed(5)},
  { color: '#008F11', label:Math.random().toFixed(5)},
  { color: '#000000', label: Math.random().toFixed(5)},
  { color: '#008F11', label:Math.random().toFixed(5)},

]

const falSonuclari = [
  "Bugün karşına eski bir arkadaş çıkabilir.",
  "Maddi konularda dikkatli olmalısın.",
  "Yakında güzel bir sürprizle karşılaşacaksın.",
  "İş hayatında yeni bir fırsat kapıda.",
  "Aşk hayatında romantik bir gün seni bekliyor.",
  "Bir hedefine bir adım daha yaklaşacaksın.",
  "Yaratıcılığını konuşturmanın zamanı geldi.",
  "Birkaç gün boyunca sağlığın için özen göstermelisin.",
  "Gelişmeler karşısında esnek olmalısın.",
  "Birinden alacağın destek sana güç verecek.",
  "Hayatının kontrolünü elinde tutmalısın.",
  "Duygusal bir konuda dürüst olmalısın.",
  "Kariyerinde yükselmek için çaba sarf etmelisin.",
  "Yeni bir yetenek keşfetme şansın var.",
  "Sakin ol, her şey zamanla düzelecek.",
  "Aile ilişkilerinde anlayışlı olmalısın.",
  "Bir hobinle ilgilenmek seni rahatlatabilir.",
  "Geleceğe dair umutlu olmalısın.",
  "Birisi seni düşündüğünden daha fazla değer veriyor.",
  "Küçük bir tatil planı yapabilirsin.",
  "Finansal konularda daha fazla plan yapmalısın.",
  "Bir projeye odaklanarak başarı elde edebilirsin.",
  "Arkadaşlarınla zaman geçirmek seni mutlu edecek.",
  "Birisi seninle iletişim kurmaya çalışıyor, açık ol.",
  "Bir öğrenme fırsatını değerlendirmelisin.",
  "Eski alışkanlıklarından kurtulma zamanı geldi.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "İnsanlar arasındaki ilişkilere önem vermelisin.",
  "Bir konuda daha fazla bilgi edinmeye çalışmalısın.",
  "Kendi içsel gücünü keşfetmelisin.",
  "Biraz risk almak sana avantaj sağlayabilir.",
  "Sosyal etkileşimlerini artırman gerekebilir.",
  "Gelecekte sana büyük bir fırsat kapısı açılacak.",
  "Yaratıcı düşünce tarzın sayesinde sorunları çözebilirsin.",
  "Kendine zaman ayırmak için bir mola vermelisin.",
  "Bir hobinle ilgilenmek seni rahatlatabilir.",
  "Çevrendeki olumlu enerjiye odaklanmalısın.",
  "Ekip çalışmasına önem vermelisin.",
  "Hayalini kurduğun bir şeye adım atma zamanı geldi.",
  "İletişim becerilerini geliştirmelisin.",
  "Yakın bir arkadaşın senin için sürpriz bir şey planlamış olabilir.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Bir ilişkide anlayışlı olmak önemlidir.",
  "Maddi konularda tasarruflu olmalısın.",
  "Bir problemle karşılaştığında sakinliğini korumalısın.",
  "Yakın zamanda yeni birisi hayatına girebilir.",
  "Eğitim veya öğrenme fırsatını değerlendirmelisin.",
  "Kendine olan güvenin artıyor.",
  "Sağlıklı yaşam alışkanlıkları edinmelisin.",
  "Bir projeye odaklanarak başarı elde edebilirsin.",
  "Hayalini kurduğun bir hedefe doğru adım atmalısın.",
  "Bir eski hobiye geri dönmek seni mutlu edebilir.",
  "Bugün kendine küçük bir ödül vermelisin.",
  "Hayatında sana ilham veren birisiyle tanışabilirsin.",
  "İş yerinde beklenmedik bir övgü alacaksın.",
  "Eğlenceli bir aktivite planlamak seni canlandırabilir.",
  "Duygusal bir konuşma yapman gerekebilir, cesur ol.",
  "Bir arkadaşın sana ilginç bir teklifte bulunabilir.",
  "Maddi konularda yeni bir plan yapmalısın.",
  "Kendi yeteneklerini daha fazla değerlendirmelisin.",
  "Bir seyahat planı yaparak rutinden çıkabilirsin.",
  "Aile ile zaman geçirmek moralini yükseltebilir.",
  "Bir sorunla karşılaştığında yaratıcı çözümler bulmalısın.",
  "Başkalarının fikirlerine açık olmalısın.",
  "Birkaç gün boyunca kendine daha fazla zaman ayırmalısın.",
  "Bir projede liderlik etme fırsatın olabilir.",
  "Eğitim veya öğrenme konusunda yeni bir adım atmalısın.",
  "Yakın bir arkadaşından ilham alacaksın.",
  "Bir anı paylaşmak sana ve çevrene iyi gelebilir.",
  "Kendine bir hedef belirleyerek motive olmalısın.",
  "Daha fazla sosyal etkinlikte bulunmalısın.",
  "Birisi seni takdir ettiğini söyleyebilir.",
  "Kendi içsel gücünü hatırlamak önemlidir.",
  "Bir konuda destek almak için yardım istemelisin.",
  "İş hayatında yeni bir yöntem denemelisin.",
  "Hayalini kurduğun bir projeye odaklanmalısın.",
  "Bir arkadaşınla birlikte yeni bir hobi edinebilirsiniz.",
  "Bir hedefe ulaşmak için adım adım ilerlemelisin.",
  "Kendine daha fazla zaman ayırmalısın.",
  "Bir süredir görmediğin bir arkadaşınla iletişime geçmelisin.",
  "Küçük bir değişiklikle büyük bir etki yaratabilirsin.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Birisi senin için sürpriz bir plan yapmış olabilir.",
  "Gelecekte seni bekleyen güzel bir fırsat var.",
  "Maddi konularda dikkatli olmalısın.",
  "Yeni bir beceri öğrenmek seni geliştirebilir.",
  "Bir sevdiğinle hoş bir anı yaşayacaksın.",
  "Hayatında olumlu değişikliklere açık olmalısın.",
  "Bir konuda daha fazla sorumluluk almalısın.",
  "Günlük yaşamında daha fazla keyif almaya odaklanmalısın.",
  "Bir arkadaşınla ortak bir projeye başlayabilirsiniz.",
  "Kendine güveninle çevrendeki insanları etkileyebilirsin.",
  "Bir hedefe ulaşmak için kararlı olmalısın.",
  "Hayatındaki küçük güzelliklere daha fazla dikkat etmelisin.",
  "Bir dostunun sana ilginç bir önerisi olabilir.",
  "Bir sevdiğinle planladığın bir etkinlik iptal olabilir, esnek olmalısın.",
  "Bir yeteneğini geliştirmek için zaman ayırmalısın.",
  "Birkaç gün boyunca daha fazla dinlenmeye ihtiyacın var.",
  "Maddi konularda planlı olmalısın.",
  "Bir işbirliği fırsatını değerlendirmelisin.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Hayatındaki rutini değiştirmek seni canlandırabilir.",
  "Bir hedefe ulaşmak için içsel gücünü kullanmalısın.",
  "Bir sevdiğinle ortak bir projede çalışmak size başarı getirebilir.",
  "Bir süredir düşündüğün bir konuda adım atma zamanı geldi.",
  "Sağlıklı yaşam alışkanlıkları edinmek sana enerji katacak.",
  "Kendi yeteneklerini daha fazla ön plana çıkarmalısın.",
  "Gelişmekte olan bir ilişkide dürüst olmalısın.",
  "Yakın zamanda bir fırsat kapısı açılabilir, hazır ol.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir konuda daha fazla bilgi edinmek seni güçlendirecek.",
  "Arkadaşlarınla birlikte geçirdiğin zaman seni mutlu ediyor.",
  "Yaratıcı düşünce tarzını iş hayatına yansıtmalısın.",
  "Bir sevdiğinle güzel bir anı biriktirebilirsiniz.",
  "Finansal konularda daha fazla güven oluşturmalısın.",
  "Hayatındaki küçük sevinçlere odaklanmalısın.",
  "Bir arkadaşınla birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kariyerinde yeni bir strateji denemek için uygun bir zaman.",
  "Bir problemle karşılaştığında çözüm odaklı olmalısın.",
  "Yakın bir arkadaşından alacağın destek seni güçlendirecek.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sevdiğinle romantik bir kaçamak yapmak size iyi gelebilir.",
  "Maddi konularda daha planlı hareket etmelisin.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek önemli.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Kendine bir hedef belirleyerek motive olmalısın.",
  "Bir konuda daha fazla sorumluluk almak seni olgunlaştırabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Gelecekte seni bekleyen olumlu bir değişiklik var.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Bir konuda daha fazla özgüven kazanmak için adım atmalısın.",
  "Bir ilişkide anlayışlı olmak önemlidir.",
  "Hayatındaki küçük detaylara daha fazla dikkat etmelisin.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Yakın bir arkadaşın senin için sürpriz bir plan yapmış olabilir.",
  "Bir projede liderlik etmek için kendine güvenmelisin.",
  "Bir sevdiğinle hoş bir anı biriktirebilirsiniz.",
  "Finansal konularda daha fazla disiplinli olmalısın.",
  "Hayatındaki küçük güzelliklere daha fazla dikkat etmelisin.",
  "Bir arkadaşınla birlikte yeni bir hobi edinebilirsiniz.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir sevdiğinle plan yapmak için uygun bir zaman.",
  "Kendine biraz zaman ayırarak içsel dengeni bulmalısın.",
  "Eski bir arkadaşınla karşılaşabilir ve güzel anılarınızı hatırlayabilirsiniz.",
  "Kariyerinde yeni bir yöne doğru adım atma zamanı geldi.",
  "Sağlıklı bir yaşam için yeni alışkanlıklar edinmelisin.",
  "Bir projede işbirliği yapmak seni daha fazla motive edebilir.",
  "Finansal konularda daha fazla planlı hareket etmelisin.",
  "Kendi yaratıcılığını daha fazla kullanmalısın.",
  "Bir arkadaşınla yeni bir hobi edinmek size keyifli anlar yaşatabilir.",
  "Duygusal bir konuda içsel gücünü kullanmalısın.",
  "Maddi konularda risk almaktan kaçınmalısın.",
  "Bir sevdiğinle romantik bir akşam geçirebilirsiniz.",
  "Hayatındaki küçük başarıları kutlamayı unutma.",
  "Kendine daha fazla değer vermeye odaklanmalısın.",
  "Bir sorunla karşılaştığında çözüm odaklı olmalısın.",
  "Yaratıcı düşünce tarzını iş hayatında değerlendirmelisin.",
  "Bir arkadaşının seni motive etmesine izin vermelisin.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Başkalarına yardım etmek seni mutlu edebilir.",
  "Gelecekte sana yeni bir kapı açılabilir.",
  "Bir sevdiğinle birlikte güzel bir tatil planı yapabilirsiniz.",
  "Kendi içsel gücünü hatırlamak için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Duygusal anlamda dengede kalmak için meditasyon deneyebilirsin.",
  "Bir hedef belirleyip adım adım ilerlemelisin.",
  "Kariyerinde yeni bir fırsat yakalama şansın var.",
  "Kendine daha fazla zaman ayırarak içsel huzur bulmalısın.",
  "Yeni bir yetenek edinmek için adım atmalısın.",
  "Bir projede liderlik etmek sana güç katacak.",
  "Maddi konularda daha fazla disiplinli olmalısın.",
  "Bir arkadaşının sana ilginç bir teklifte bulunabilir.",
  "Yakın bir arkadaşınla duygusal bir sohbet seni rahatlatabilir.",
  "Başkalarının fikirlerine saygı göstermelisin.",
  "Bir sorun karşısında sakinliğini korumalısın.",
  "Hayatındaki olumlu değişikliklere odaklanmalısın.",
  "Bir proje üzerinde çalışırken ekip içinde iletişime önem vermelisin.",
  "Bir sevdiğinle birlikte yeni bir hobi edinmek sana iyi gelebilir.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
  "Bir öğrenme fırsatını değerlendirmek için cesur olmalısın.",
  "Kendi içsel gücünü keşfetmek için zaman ayırmalısın.",
  "Bir arkadaşınla birlikte yeni bir girişimde bulunabilirsiniz.",
  "Kendi yaratıcılığını iş ve özel yaşamında kullanmalısın.",
  "Bir konuda daha fazla güven kazanmak için çaba sarf etmelisin.",
  "Gelecekte seni bekleyen güzel bir sürpriz var.",
  "Hayatındaki olumsuzluklara odaklanmak yerine olumlu yönleri görmeye çalışmalısın.",
  "Bir sevdiğinle birlikte yeni bir aktiviteye başlamak size enerji katacak.",
  "İş hayatında daha fazla liderlik rolü üstlenmelisin.",
  "Bir projede işbirliği yapmak size başarı getirebilir.",
  "Hayatında yeni bir kapı açmak için cesur olmalısın.",
  "Kendi içsel gücünü hatırlamak ve güçlendirmek için zaman ayırmalısın.",
];















const rand = (m, M) => Math.random() * (M - m) + m
const tot = sectors.length
const spinEl = document.querySelector('#spin')
const ctx = document.querySelector('#wheel').getContext('2d')
const dia = ctx.canvas.width
const rad = dia / 2
const PI = Math.PI
const TAU = 2 * PI
const arc = TAU / sectors.length


const friction = 0.991 // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0 // Angular velocity
let ang = 0 // Angle in radians

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot

function drawSector(sector, i) {
  const ang = arc * i
  ctx.save()
  // COLOR
  ctx.beginPath()
  ctx.fillStyle = sector.color
  ctx.moveTo(rad, rad)
  ctx.arc(rad, rad, rad, ang, ang + arc)
  ctx.lineTo(rad, rad)
  ctx.fill()
  // TEXT
  ctx.translate(rad, rad)
  ctx.rotate(ang + arc / 2)
  ctx.textAlign = 'right'
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 16px sans-serif'
  ctx.fillText(sector.label, rad - 10, 10)
  //
  ctx.restore()
}

function rotate() {
  const sector = sectors[getIndex()]
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`
  spinEl.textContent = !angVel ? '?' : sector.label
  spinEl.style.background = sector.color
  if (angVel ==0 && ang != 0) {
var randomFalSonucu = falSonuclari[Math.floor(Math.random() * falSonuclari.length)];
spinEl.addEventListener('click', () => {
 var randomFalSonucu = falSonuclari[Math.floor(Math.random() * falSonuclari.length)];
});  


//alert(randomFalSonucu)

showFalPopup();

// main.js


document.getElementById('closeFalButton').addEventListener('click', closeFalPopup);

function showFalPopup() {
  const matrixBackground = document.querySelector('.matrix-background');
  const falPopup = document.getElementById('falPopup');
  const falPopupMessage = document.getElementById('falPopupMessage');

  matrixBackground.style.display = 'block';

 
  falPopupMessage.innerText = randomFalSonucu;
  falPopup.style.display = 'block';
}

function closeFalPopup() {
  const matrixBackground = document.querySelector('.matrix-background');
  const falPopup = document.getElementById('falPopup');

  matrixBackground.style.display = 'none';
  falPopup.style.display = 'none';
}

spinEl.textContent='?';


  }
  if (angVel < 0.0035) angVel = 0
  
}




function frame() {
  if (!angVel) return
  angVel *= friction // Decrement velocity by friction
  if (angVel < 0.0035) angVel = 0 // Bring to stop
  ang += angVel // Update angle
  ang %= TAU // Normalize angle
  rotate()
}

function engine() {
  frame()
  requestAnimationFrame(engine)
}

function init() {
  sectors.forEach(drawSector)
  rotate() // Initial rotation
  engine() // Start engine
  spinEl.addEventListener('click', () => {
    if (!angVel) angVel = rand(0.25, 0.45)
  })
}


init()
