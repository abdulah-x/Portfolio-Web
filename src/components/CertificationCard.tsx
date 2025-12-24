import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
  index?: number;
}

export function CertificationCard({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  description,
  skills,
  index = 0,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/50 hover:neon-border transition-all duration-300"
    >
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="font-mono text-sm font-semibold text-foreground mb-1">
            {title}
          </h4>
          <p className="font-mono text-xs text-primary">{issuer}</p>
          <p className="font-mono text-xs text-muted-foreground">{date}</p>
          {credentialId && (
            <p className="font-mono text-xs text-muted-foreground mt-1">
              ID: {credentialId}
            </p>
          )}
        </div>

        {description && (
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline mt-2"
          >
            <ExternalLink className="w-3 h-3" />
            Show credential
          </a>
        )}
      </div>
    </motion.div>
  );
}
