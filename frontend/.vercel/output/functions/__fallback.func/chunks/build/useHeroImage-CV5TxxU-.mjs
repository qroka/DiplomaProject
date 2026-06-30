import { aH as useColorMode, v as vueExports } from './server.mjs';

const heroImages = {
  home: {
    file: "connect",
    alt: "Команда администрации Сургутского района"
  },
  about: {
    file: "line-1",
    alt: "О кадровой политике администрации района"
  },
  honorboard: {
    file: "line-6",
    alt: "Доска почёта сотрудников"
  },
  contacts: {
    file: "line-7",
    alt: "Контакты отдела кадров"
  },
  vacancies: {
    file: "optimize",
    alt: "Вакансии администрации Сургутского района"
  },
  tenders: {
    file: "track",
    alt: "Конкурсы на замещение должностей"
  },
  staffreserve: {
    file: "line-2",
    alt: "Кадровый резерв"
  },
  youth: {
    file: "line-3",
    alt: "Молодёжная политика и стажировки"
  },
  profdev: {
    file: "line-4",
    alt: "Профессиональное развитие сотрудников"
  },
  antiCorruption: {
    file: "line-5",
    alt: "Противодействие коррупции"
  },
  privacy: {
    file: "connect",
    alt: "Политика конфиденциальности"
  },
  default: {
    file: "connect",
    alt: "Кадровый портал Сургутского района"
  }
};
function resolveHeroImagePath(key, colorMode = "light") {
  const meta = heroImages[key] ?? heroImages.default;
  return `/images/${colorMode}/${meta.file}.svg`;
}
function resolveHeroImageAlt(key) {
  return (heroImages[key] ?? heroImages.default).alt;
}
function useHeroImage(key) {
  const colorMode = useColorMode();
  const src = vueExports.computed(() => {
    const mode = colorMode.value === "dark" ? "dark" : "light";
    return resolveHeroImagePath(key, mode);
  });
  const alt = resolveHeroImageAlt(key);
  return { src, alt };
}

export { useHeroImage as u };
//# sourceMappingURL=useHeroImage-CV5TxxU-.mjs.map
